import { NextResponse, type NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

type ControllerFn = (req: ExpressLikeRequest, res: ExpressLikeResponse) => unknown;

interface ExpressLikeRequest {
  method: string;
  url: string;
  originalUrl: string;
  path: string;
  query: Record<string, string>;
  params: Record<string, string>;
  cookies: Record<string, string>;
  headers: Record<string, string>;
  body: unknown;
  files: Record<string, File>;
  userid?: number | string;
  role?: string;
  get(name: string): string | undefined;
}

interface CapturedResponse {
  statusCode: number;
  headers: Headers;
  setCookies: string[];
  payload: BodyInit;
}

interface ExpressLikeResponse {
  status(code: number): ExpressLikeResponse;
  set(field: string | Record<string, string>, value?: string): ExpressLikeResponse;
  setHeader(field: string, value: string): ExpressLikeResponse;
  header(field: string, value: string): ExpressLikeResponse;
  json(body: unknown): ExpressLikeResponse;
  send(body: unknown): ExpressLikeResponse;
  end(body?: BodyInit): ExpressLikeResponse;
  redirect(code: number | string, location?: string): ExpressLikeResponse;
  cookie(name: string, value: string, options?: CookieOptions): ExpressLikeResponse;
  clearCookie(name: string, options?: CookieOptions): ExpressLikeResponse;
  locals: Record<string, unknown>;
}

interface CookieOptions {
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: 'Lax' | 'Strict' | 'None' | 'lax' | 'strict' | 'none';
  maxAge?: number;
  expires?: Date;
  path?: string;
  domain?: string;
}

function serializeCookie(name: string, value: string, options: CookieOptions = {}): string {
  const parts = [`${name}=${encodeURIComponent(value)}`];
  parts.push(`Path=${options.path ?? '/'}`);
  if (options.domain) parts.push(`Domain=${options.domain}`);
  if (typeof options.maxAge === 'number') parts.push(`Max-Age=${Math.floor(options.maxAge / 1000)}`);
  if (options.expires) parts.push(`Expires=${options.expires.toUTCString()}`);
  if (options.httpOnly) parts.push('HttpOnly');
  if (options.secure) parts.push('Secure');
  if (options.sameSite) parts.push(`SameSite=${options.sameSite}`);
  return parts.join('; ');
}

async function buildRequest(
  req: NextRequest,
  ctxParams?: Promise<Record<string, string | string[]>>,
): Promise<ExpressLikeRequest> {
  const url = new URL(req.url);
  const query: Record<string, string> = {};
  url.searchParams.forEach((value, key) => {
    query[key] = value;
  });

  const cookies: Record<string, string> = {};
  req.cookies.getAll().forEach((c) => {
    cookies[c.name] = c.value;
  });

  const headers: Record<string, string> = {};
  req.headers.forEach((value, key) => {
    headers[key] = value;
  });

  const rawParams = ctxParams ? await ctxParams : {};
  const params: Record<string, string> = {};
  for (const key of Object.keys(rawParams)) {
    const value = rawParams[key];
    params[key] = Array.isArray(value) ? value.join('/') : value;
  }

  let body: unknown;
  const files: Record<string, File> = {};
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    const contentType = headers['content-type'] ?? '';
    if (contentType.includes('application/json')) {
      body = await req.json().catch(() => ({}));
    } else if (
      contentType.includes('multipart/form-data') ||
      contentType.includes('application/x-www-form-urlencoded')
    ) {
      const form = await req.formData();
      const parsed: Record<string, unknown> = {};
      for (const [key, value] of form.entries()) {
        if (typeof value === 'string') parsed[key] = value;
        else files[key] = value;
      }
      body = parsed;
    } else {
      body = await req.text().catch(() => '');
    }
  }

  return {
    method: req.method,
    url: `${url.pathname}${url.search}`,
    originalUrl: `${url.pathname}${url.search}`,
    path: url.pathname,
    query,
    params,
    cookies,
    headers,
    body,
    files,
    get(name: string) {
      return headers[name.toLowerCase()];
    },
  };
}

function verifyAuth(req: NextRequest): { userid: string; role?: string } | { error: string; status: number } {
  const authHeader = req.headers.get('authorization') ?? '';
  const bearer = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  const token = bearer ?? req.cookies.get('accessToken')?.value ?? null;
  if (!token) return { error: 'No token provided', status: 401 };
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
      role?: string;
    };
    return { userid: decoded.id, role: decoded.role };
  } catch {
    return { error: 'Invalid token', status: 403 };
  }
}

export function callController(
  fn: ControllerFn,
  options: { auth?: boolean; aliasParams?: Record<string, string> } = {},
) {
  return async (
    req: NextRequest,
    ctx: { params?: Promise<Record<string, string | string[]>> },
  ): Promise<Response> => {
    try {
      const request = await buildRequest(req, ctx?.params);

      if (options.aliasParams) {
        for (const target of Object.keys(options.aliasParams)) {
          request.params[target] = request.params[options.aliasParams[target]];
        }
      }

      if (options.auth) {
        const auth = verifyAuth(req);
        if ('error' in auth) {
          return NextResponse.json({ error: auth.error }, { status: auth.status });
        }
        request.userid = auth.userid;
        request.role = auth.role;
      }

      const captured = await new Promise<CapturedResponse>((resolve) => {
        let finished = false;
        const state: CapturedResponse = {
          statusCode: 200,
          headers: new Headers(),
          setCookies: [],
          payload: '',
        };
        const finish = (payload: BodyInit) => {
          if (finished) return;
          finished = true;
          state.payload = payload;
          resolve(state);
        };

        const res: ExpressLikeResponse = {
          status(code) {
            state.statusCode = code;
            return res;
          },
          set(field, value) {
            if (typeof field === 'object') {
              for (const key of Object.keys(field)) state.headers.set(key, field[key]);
            } else if (value !== undefined) {
              state.headers.set(field, value);
            }
            return res;
          },
          setHeader(field, value) {
            state.headers.set(field, value);
            return res;
          },
          header(field, value) {
            state.headers.set(field, value);
            return res;
          },
          json(body) {
            state.headers.set('content-type', 'application/json');
            finish(JSON.stringify(body ?? null));
            return res;
          },
          send(body) {
            if (body !== null && typeof body === 'object' && !(body instanceof Uint8Array)) {
              state.headers.set('content-type', 'application/json');
              finish(JSON.stringify(body));
            } else {
              finish((body as BodyInit) ?? '');
            }
            return res;
          },
          end(body) {
            finish(body ?? '');
            return res;
          },
          redirect(code, location) {
            if (typeof code === 'string') {
              state.headers.set('location', code);
              state.statusCode = 302;
            } else {
              state.statusCode = code;
              if (location) state.headers.set('location', location);
            }
            finish('');
            return res;
          },
          cookie(name, value, cookieOptions) {
            state.setCookies.push(serializeCookie(name, value, cookieOptions));
            return res;
          },
          clearCookie(name, cookieOptions) {
            state.setCookies.push(
              serializeCookie(name, '', { ...cookieOptions, maxAge: 0, expires: new Date(0) }),
            );
            return res;
          },
          locals: {},
        };

        Promise.resolve(fn(request, res))
          .then((returned) => {
            if (!finished) {
              if (returned !== undefined && returned !== res) {
                state.headers.set('content-type', 'application/json');
                finish(JSON.stringify(returned));
              } else {
                finish('');
              }
            }
          })
          .catch((error) => {
            if (!finished) {
              state.statusCode = 500;
              state.headers.set('content-type', 'application/json');
              finish(JSON.stringify({ error: 'Server error', detail: String(error?.message ?? error) }));
            }
          });
      });

      const response = new NextResponse(captured.payload, {
        status: captured.statusCode,
        headers: captured.headers,
      });
      for (const cookie of captured.setCookies) response.headers.append('set-cookie', cookie);
      return response;
    } catch (error) {
      return NextResponse.json(
        { error: 'Server error', detail: String((error as Error)?.message ?? error) },
        { status: 500 },
      );
    }
  };
}
