import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import PrivacySettingsButton from '../privacy/PrivacySettingsButton';
import { tOr } from '../../i18n/keySafe';
import { useLocalizedPath } from '../../i18n/useLocalizedPath';
import { LOGOS } from '../../constants/logos';
import { isHubStaticPath, hubStaticPathToReactPath } from '../../constants/hubLinks';
import blocks from './footer.json';

interface FooterSubLink {
  id: number;
  text: string;
  URL?: string;
  target?: string;
}

interface FooterLink {
  id: number;
  text: string;
  URL?: string;
  target?: string;
  subLinks?: FooterSubLink[];
}

interface FooterColumn {
  id: number;
  Title: string;
  URL?: string;
  Links?: FooterLink[];
}

interface FooterSocialMedia {
  id: number;
  name: string;
  link?: { URL?: string; target?: string };
}

interface FooterLegalLink {
  id: number;
  text: string;
  URL?: string;
  target?: string;
  modalType?: string;
}

interface FooterBlocks {
  colomn?: FooterColumn[];
  social_media_links?: FooterSocialMedia[];
  legal_links?: FooterLegalLink[];
}

const data = blocks as FooterBlocks;

const UNIVERSE_BASE_URL = 'https://universe.skoleom.com';

function toUniverseUrl(url?: string) {
  if (!url || url === '#') return url;
  if (/^https?:\/\//.test(url)) return url;
  return `${UNIVERSE_BASE_URL}${url.startsWith('/') ? url : `/${url}`}`;
}

const SOCIAL_ICON_SIZE = 18;
const SOCIAL_ICON_STROKE = 1.75;

function SocialIcon({ name }: { name: string }) {
  const strokeIconProps = {
    size: SOCIAL_ICON_SIZE,
    strokeWidth: SOCIAL_ICON_STROKE,
    'aria-hidden': true as const,
  };

  switch (name) {
    case 'Instagram':
      return <Instagram {...strokeIconProps} />;
    case 'YouTube':
      return <Youtube {...strokeIconProps} />;
    case 'Facebook':
      return <Facebook {...strokeIconProps} />;
    case 'LinkedIn':
      return <Linkedin {...strokeIconProps} />;
    case 'X':
    default:
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width={SOCIAL_ICON_SIZE}
          height={SOCIAL_ICON_SIZE}
          className="sk-footer-social-icon-fill"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
  }
}

interface SmartLinkProps {
  href?: string;
  target?: string;
  localizePath?: (path: string) => string;
  className?: string;
  ariaLabel?: string;
  title?: string;
  children: ReactNode;
}

function SmartLink({
  href,
  target,
  localizePath,
  className,
  ariaLabel,
  title,
  children,
}: SmartLinkProps) {
  if (!href || href === '#') {
    return (
      <button type="button" className={className} aria-label={ariaLabel} title={title}>
        {children}
      </button>
    );
  }

  if (href.startsWith('/') && isHubStaticPath(href)) {
    const to = localizePath
      ? localizePath(hubStaticPathToReactPath(href))
      : hubStaticPathToReactPath(href);
    return (
      <Link to={to} className={className} aria-label={ariaLabel} title={title}>
        {children}
      </Link>
    );
  }

  const finalHref = toUniverseUrl(href);

  if (href.startsWith('/')) {
    const to = localizePath ? localizePath(href) : href;
    return (
      <Link to={to} className={className} aria-label={ariaLabel} title={title}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={finalHref}
      target={target || '_self'}
      rel={target === '_blank' ? 'noreferrer' : undefined}
      className={className}
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </a>
  );
}

interface FooterColumnSectionProps {
  column: FooterColumn;
  localizePath: (path: string) => string;
  t: ReturnType<typeof useTranslation>['t'];
}

function FooterColumnSection({ column, localizePath, t }: FooterColumnSectionProps) {
  const isDesktop = useMediaQuery('(min-width: 992px)');
  const [open, setOpen] = useState(false);
  const panelId = `footer-column-panel-${column.id}`;
  const title = tOr(t, `footer.columns.${column.id}`, column.Title);

  const nav = (
    <nav className="sk-footer-nav" aria-label={title}>
      {column.Links?.map((link) => (
        <div className="sk-footer-link-group" key={link.id}>
          <SmartLink
            href={link.URL}
            target={link.target || '_self'}
            localizePath={localizePath}
            className="sk-footer-link"
          >
            {tOr(t, `footer.links.${link.id}`, link.text)}
          </SmartLink>

          {link.subLinks?.length ? (
            <ul className="sk-footer-sub">
              {link.subLinks.map((subLink) => (
                <li key={subLink.id}>
                  <SmartLink
                    href={subLink.URL || '#'}
                    target={subLink.target || '_self'}
                    localizePath={localizePath}
                  >
                    {tOr(t, `footer.links.${subLink.id}`, subLink.text)}
                  </SmartLink>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </nav>
  );

  const titleNode = column.URL ? (
    <SmartLink
      href={column.URL}
      localizePath={localizePath}
      className="sk-footer-column__title-link"
    >
      <h3>{title}</h3>
    </SmartLink>
  ) : (
    <h3>{title}</h3>
  );

  if (isDesktop) {
    return (
      <div className="sk-footer-column">
        {titleNode}
        {nav}
      </div>
    );
  }

  return (
    <div className="sk-footer-column sk-footer-column--accordion">
      <div className="sk-footer-column__toggle">
        {titleNode}
        <button
          type="button"
          className="sk-footer-column__chevron-btn"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={title}
          onClick={() => setOpen((value) => !value)}
        >
          <ChevronDown
            size={18}
            strokeWidth={2}
            className={`sk-footer-column__chevron${open ? ' is-open' : ''}`}
            aria-hidden
          />
        </button>
      </div>
      <div id={panelId} className="sk-footer-column__panel" hidden={!open}>
        {nav}
      </div>
    </div>
  );
}

export default function Footer() {
  const { t } = useTranslation();
  const localizePath = useLocalizedPath();

  return (
    <footer className="sk-footer">
      <div className="sk-footer-shell">
        <div className="sk-footer-main">
          <div className="sk-footer-brand">
            <SmartLink
              href="/"
              localizePath={localizePath}
              className="sk-footer-logo"
              ariaLabel="Skoleom Universe"
            >
              <img src={LOGOS.skoleomBrand} alt="Skoleom" width={2130} height={719} />
            </SmartLink>

            <p>
              {tOr(
                t,
                'footer.brand.description',
                "L'écosystème Skoleom réunit les boutiques audiovisuelles, les outils créateurs et les solutions business pour rendre les contenus interactifs et actionnables.",
              )}
            </p>

            <div
              className="sk-footer-socials"
              aria-label={tOr(t, 'footer.socials.label', 'Réseaux sociaux Skoleom')}
            >
              {data.social_media_links?.map((social) => (
                <SmartLink
                  key={social.id}
                  href={social.link?.URL || '#'}
                  target={social.link?.target || '_blank'}
                  ariaLabel={social.name}
                  title={social.name}
                >
                  <SocialIcon name={social.name} />
                </SmartLink>
              ))}
            </div>
          </div>

          <div className="sk-footer-grid">
            {data.colomn?.map((column) => (
              <FooterColumnSection
                key={column.id}
                column={column}
                localizePath={localizePath}
                t={t}
              />
            ))}
          </div>
        </div>

        <div className="sk-footer-bottom">
          <small>
            © {new Date().getFullYear()} Skoleom —{' '}
            {tOr(t, 'footer.copyright', 'Breveté 2020. Tous droits réservés.')}
          </small>

          <div>
            {data.legal_links?.map((link) =>
              link.modalType === 'cookies' ? (
                <PrivacySettingsButton key={link.id} className="sk-footer-privacy-link">
                  {tOr(t, `footer.legalLinks.${link.id}`, link.text)}
                </PrivacySettingsButton>
              ) : (
                <Link key={link.id} to={localizePath(link.URL || '#')}>
                  {tOr(t, `footer.legalLinks.${link.id}`, link.text)}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
