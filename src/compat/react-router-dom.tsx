'use client';

import {
  forwardRef,
  useCallback,
  useMemo,
  type AnchorHTMLAttributes,
  type CSSProperties,
  type ReactNode,
} from 'react';
import NextLink from 'next/link';
import {
  usePathname,
  useRouter,
  useSearchParams as useNextSearchParams,
  useParams as useNextParams,
} from 'next/navigation';

export interface Location {
  pathname: string;
  search: string;
  hash: string;
  state: unknown;
  key: string;
}

function currentHash(): string {
  if (typeof window === 'undefined') return '';
  return window.location.hash || '';
}

function currentState(): unknown {
  if (typeof window === 'undefined') return null;
  try {
    return window.history.state?.usr ?? window.history.state ?? null;
  } catch {
    return null;
  }
}

export function useLocation(): Location {
  const pathname = usePathname() || '/';
  const params = useNextSearchParams();
  const search = params && params.toString() ? `?${params.toString()}` : '';
  return {
    pathname,
    search,
    hash: currentHash(),
    state: currentState(),
    key: 'default',
  };
}

export interface NavigateOptions {
  replace?: boolean;
  state?: unknown;
  scroll?: boolean;
}

export type NavigateFunction = {
  (to: string, options?: NavigateOptions): void;
  (delta: number): void;
};

export function useNavigate(): NavigateFunction {
  const router = useRouter();
  return useCallback(
    (to: string | number, options?: NavigateOptions) => {
      if (typeof to === 'number') {
        if (to < 0) router.back();
        else router.forward();
        return;
      }
      if (options?.replace) router.replace(to, { scroll: options?.scroll });
      else router.push(to, { scroll: options?.scroll });
    },
    [router],
  ) as NavigateFunction;
}

export function useParams<T extends Record<string, string | undefined> = Record<string, string | undefined>>(): T {
  return (useNextParams() ?? {}) as T;
}

type SetSearchParams = (
  next: URLSearchParams | Record<string, string> | ((prev: URLSearchParams) => URLSearchParams),
  options?: { replace?: boolean },
) => void;

export function useSearchParams(): [URLSearchParams, SetSearchParams] {
  const router = useRouter();
  const pathname = usePathname() || '/';
  const nextParams = useNextSearchParams();

  const searchParams = useMemo(
    () => new URLSearchParams(nextParams ? nextParams.toString() : ''),
    [nextParams],
  );

  const setSearchParams = useCallback<SetSearchParams>(
    (next, options) => {
      let resolved: URLSearchParams;
      if (typeof next === 'function') resolved = next(new URLSearchParams(searchParams));
      else if (next instanceof URLSearchParams) resolved = next;
      else resolved = new URLSearchParams(next);
      const qs = resolved.toString();
      const url = qs ? `${pathname}?${qs}` : pathname;
      if (options?.replace) router.replace(url);
      else router.push(url);
    },
    [router, pathname, searchParams],
  );

  return [searchParams, setSearchParams];
}

type ToProp = string | { pathname?: string; search?: string; hash?: string };

function resolveTo(to: ToProp): string {
  if (typeof to === 'string') return to;
  return `${to.pathname ?? ''}${to.search ?? ''}${to.hash ?? ''}`;
}

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: ToProp;
  replace?: boolean;
  state?: unknown;
  reloadDocument?: boolean;
  prefetch?: boolean;
  children?: ReactNode;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { to, replace, state, reloadDocument, prefetch, ...rest },
  ref,
) {
  const href = resolveTo(to);
  if (reloadDocument) {
    return <a ref={ref} href={href} {...rest} />;
  }
  return (
    <NextLink ref={ref} href={href} replace={replace} scroll prefetch={prefetch} {...rest} />
  );
});

type ClassNameProp =
  | string
  | ((state: { isActive: boolean; isPending: boolean }) => string);
type StyleProp =
  | CSSProperties
  | ((state: { isActive: boolean; isPending: boolean }) => CSSProperties);

export interface NavLinkProps extends Omit<LinkProps, 'className' | 'style' | 'children'> {
  className?: ClassNameProp;
  style?: StyleProp;
  end?: boolean;
  caseSensitive?: boolean;
  children?: ReactNode | ((state: { isActive: boolean; isPending: boolean }) => ReactNode);
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(
  { to, end, caseSensitive, className, style, children, ...rest },
  ref,
) {
  const pathname = usePathname() || '/';
  const target = resolveTo(to).split('?')[0].split('#')[0];
  const a = caseSensitive ? pathname : pathname.toLowerCase();
  const b = caseSensitive ? target : target.toLowerCase();
  const isActive = end ? a === b : a === b || a.startsWith(`${b}/`);
  const state = { isActive, isPending: false };

  const resolvedClassName =
    typeof className === 'function' ? className(state) : className;
  const resolvedStyle = typeof style === 'function' ? style(state) : style;
  const resolvedChildren =
    typeof children === 'function' ? children(state) : children;

  return (
    <Link
      ref={ref}
      to={to}
      className={resolvedClassName}
      style={resolvedStyle}
      aria-current={isActive ? 'page' : undefined}
      data-active={isActive ? 'true' : undefined}
      {...rest}
    >
      {resolvedChildren}
    </Link>
  );
});

export interface PathMatch {
  params: Record<string, string>;
  pathname: string;
  pattern: { path: string; caseSensitive: boolean; end: boolean };
}

export function matchPath(
  pattern: string | { path: string; caseSensitive?: boolean; end?: boolean },
  pathname: string,
): PathMatch | null {
  const conf =
    typeof pattern === 'string'
      ? { path: pattern, caseSensitive: false, end: true }
      : { caseSensitive: false, end: true, ...pattern };

  const paramNames: string[] = [];
  let regexpSource =
    '^' +
    conf.path
      .replace(/\/*\*?$/, '')
      .replace(/^\/*/, '/')
      .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
      .replace(/\/:(\w+)/g, (_m, key: string) => {
        paramNames.push(key);
        return '/([^\\/]+)';
      });

  if (conf.path.endsWith('*')) {
    paramNames.push('*');
    regexpSource += '(?:\\/(.+)|\\/*)$';
  } else {
    regexpSource += conf.end ? '\\/*$' : '(?:\\b|\\/|$)';
  }

  const matcher = new RegExp(regexpSource, conf.caseSensitive ? '' : 'i');
  const match = pathname.match(matcher);
  if (!match) return null;

  const params: Record<string, string> = {};
  paramNames.forEach((name, index) => {
    params[name] = decodeURIComponent(match[index + 1] ?? '');
  });

  return {
    params,
    pathname: match[0],
    pattern: { path: conf.path, caseSensitive: conf.caseSensitive, end: conf.end },
  };
}

export function Navigate({
  to,
  replace,
}: {
  to: string;
  replace?: boolean;
  state?: unknown;
}): null {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    if (replace) router.replace(to);
    else router.push(to);
  }
  return null;
}

export function Outlet({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}
