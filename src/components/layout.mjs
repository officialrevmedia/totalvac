import {
  siteConfig,
  phoneLabel,
  phoneHref,
  hasPhone,
  hasEmail,
  hasServiceArea,
  serviceAreaLabel,
  availabilityLabel
} from '../config/siteConfig.mjs';
import { services } from '../content/services.mjs';
import { iconArrow, iconPhone, iconClose } from './icons.mjs';

export const navItems = [
  { label: 'Services', href: '/services/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'About', href: '/about/' },
  { label: 'Service Area', href: '/service-area/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' }
];

const isCurrent = (href, route) => (route === href ? ' aria-current="page"' : '');

export const SkipLink = () => `<a class="skip-link" href="#main">Skip to content</a>`;

export const UtilityBar = () => `
<div class="utility-bar">
  <div class="shell utility-bar__inner">
    <p class="utility-bar__left">${siteConfig.descriptor}</p>
    <div class="utility-bar__right">
      <a class="utility-bar__link" href="${phoneHref()}">${iconPhone()}<span>${phoneLabel()}</span></a>
      <span class="utility-bar__note">${availabilityLabel()}</span>
    </div>
  </div>
</div>`;

export const SiteHeader = (route = '/') => `
<header class="site-header" data-header>
  <div class="shell site-header__inner">
    <a class="brand" href="/" aria-label="TotalVac Solutions home">
      <img src="/assets/brand/totalvac-logo-white.png" alt="TotalVac Solutions" width="380" height="126" fetchpriority="high">
    </a>

    <nav class="nav" aria-label="Primary">
      ${navItems
        .map(
          (item) =>
            `<a class="nav__link" href="${item.href}"${isCurrent(item.href, route)}>${item.label}</a>`
        )
        .join('\n      ')}
    </nav>

    <div class="header-actions">
      <a class="btn btn--ghost-light" href="${phoneHref()}">${iconPhone()}<span>${phoneLabel()}</span></a>
      <a class="btn" href="/contact/">Request Service ${iconArrow()}</a>
    </div>

    <button class="nav-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu">
      <span class="nav-toggle__bars" aria-hidden="true"><span></span><span></span><span></span></span>
      Menu
    </button>
  </div>
  <div class="scroll-progress" aria-hidden="true"></div>
</header>`;

export const MobileMenu = (route = '/') => `
<div class="mobile-menu" id="mobile-menu" data-menu>
  <div class="shell mobile-menu__top">
    <a class="brand" href="/" aria-label="TotalVac Solutions home">
      <img src="/assets/brand/totalvac-logo-white.png" alt="TotalVac Solutions" width="300" height="99">
    </a>
    <button class="mobile-menu__close" type="button" data-menu-toggle aria-label="Close menu">${iconClose()}</button>
  </div>
  <nav class="shell" aria-label="Mobile">
    <ul class="mobile-menu__list">
      ${navItems
        .map(
          (item, i) => `<li>
        <a class="mobile-menu__link" href="${item.href}"${isCurrent(item.href, route)}>
          ${item.label}<span>0${i + 1}</span>
        </a>
      </li>`
        )
        .join('\n      ')}
    </ul>
  </nav>
  <div class="shell mobile-menu__foot">
    <a class="btn btn--block" href="/contact/">Request Service ${iconArrow()}</a>
    <a class="btn btn--ghost-light btn--block" href="${phoneHref()}">${iconPhone()}<span>${phoneLabel()}</span></a>
    <p class="mobile-menu__meta">${availabilityLabel()}</p>
  </div>
</div>`;

export const StickyMobileActions = () => `
<div class="sticky-actions" aria-label="Quick actions">
  <a href="${phoneHref()}">${iconPhone()}<span>${hasPhone() ? 'Call now' : 'Call for service'}</span></a>
  <a href="/contact/">Request Service ${iconArrow()}</a>
</div>`;

export const Breadcrumbs = (trail = []) => `
<nav class="shell breadcrumbs" aria-label="Breadcrumb">
  <ol>
    ${trail
      .map((item, i) =>
        i === trail.length - 1
          ? `<li><span aria-current="page">${item.label}</span></li>`
          : `<li><a href="${item.href}">${item.label}</a></li>`
      )
      .join('\n    ')}
  </ol>
</nav>`;

export const SiteFooter = () => {
  const year = new Date().getFullYear();
  const socials = Object.entries(siteConfig.socialLinks || {});

  return `
<footer class="site-footer">
  <div class="shell site-footer__inner">
    <div class="footer-brand">
      <img src="/assets/brand/totalvac-logo-white.png" alt="TotalVac Solutions" width="380" height="126" loading="lazy">
      <p class="footer-descriptor">${siteConfig.descriptor}</p>
      <p>Professional vacuum services for approved commercial, industrial, property, and food-service needs.</p>
    </div>

    <div>
      <h2>Services</h2>
      <ul>
        ${services
          .map((s) => `<li><a href="/services/${s.slug}/">${s.title}</a></li>`)
          .join('\n        ')}
        <li><a href="/services/#scheduled-maintenance">Scheduled Maintenance</a></li>
      </ul>
    </div>

    <div>
      <h2>Company</h2>
      <ul>
        <li><a href="/about/">About</a></li>
        <li><a href="/industries/">Industries</a></li>
        <li><a href="/service-area/">Service Area</a></li>
        <li><a href="/faq/">FAQ</a></li>
        <li><a href="/contact/">Request Service</a></li>
      </ul>
    </div>

    <div>
      <h2>Contact</h2>
      <ul>
        <li><a href="${phoneHref()}">${phoneLabel()}</a></li>
        ${hasEmail() ? `<li><a href="mailto:${siteConfig.email}">${siteConfig.email}</a></li>` : ''}
        <li>${hasServiceArea() ? `Serving ${serviceAreaLabel()}` : 'Serving our local region'}</li>
        <li>${availabilityLabel()}</li>
        ${
          siteConfig.showPublicAddress && siteConfig.address
            ? `<li>${siteConfig.address}</li>`
            : ''
        }
        ${socials
          .map(([name, url]) => `<li><a href="${url}" rel="noopener">${name}</a></li>`)
          .join('\n        ')}
      </ul>
    </div>
  </div>

  <div class="shell">
    <div class="site-footer__bottom">
      <p>&copy; ${year} ${siteConfig.legalBusinessName || siteConfig.businessName}. All rights reserved.</p>
      <p><a href="/privacy/">Privacy</a></p>
    </div>
  </div>
</footer>`;
};

export default { SkipLink, UtilityBar, SiteHeader, MobileMenu, StickyMobileActions, Breadcrumbs, SiteFooter };
