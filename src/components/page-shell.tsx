import Link from 'next/link';
import type { ReactNode } from 'react';

import { MainNav } from '@/components/main-nav';
import { SiteControls } from '@/components/site-controls';

type PageShellProps = {
  children: ReactNode;
};

const footerPracticeLinks = [
  { href: '/library', label: 'Library', icon: 'fa-solid fa-book-open' },
  { href: '/library/bhagavad-gita', label: 'Bhagavad Gita', icon: 'fa-solid fa-om' },
  { href: '/stotras', label: 'Stotras', icon: 'fa-solid fa-hands-praying' },
  { href: '/festivals', label: 'Festivals', icon: 'fa-solid fa-calendar-days' },
];

const footerDeityLinks = [
  { href: '/shiva', label: 'Shiva', icon: 'fa-solid fa-mountain-sun' },
  { href: '/vishnu', label: 'Vishnu', icon: 'fa-solid fa-water' },
  { href: '/krishna', label: 'Krishna', icon: 'fa-solid fa-feather-pointed' },
  { href: '/devi', label: 'Devi', icon: 'fa-solid fa-crown' },
  { href: '/hanuman', label: 'Hanuman', icon: 'fa-solid fa-fire' },
];

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-frame">
          <Link className="brand-lockup" href="/">
            <span className="brand-mark">ॐ</span>
            <span>
              <span className="brand-name">DivineSV</span>
              <span className="brand-caption">Om Tat Sat</span>
            </span>
          </Link>

          <div className="header-actions">
            <MainNav />
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-grid">
          <section className="footer-brand-panel">
            <span className="pill">Digital Mandir</span>
            <h2 className="footer-title">DivineSV</h2>
            <p>
              A clear devotional space for sacred reading, music, stotras, festival reference, and darshan across the
              many living streams of Sanatana Dharma.
            </p>
            <div className="link-row footer-link-row">
              <Link className="primary-link" href="/library">
                Open Library
              </Link>
              <Link className="secondary-link" href="/contact">
                Contact
              </Link>
            </div>
          </section>

          <section className="footer-column">
            <h3 className="footer-heading">
              <i className="fa-solid fa-compass footer-heading-icon" aria-hidden="true" />
              Practice
            </h3>
            <div className="footer-links">
              {footerPracticeLinks.map((item) => (
                <Link key={item.href} className="footer-link" href={item.href}>
                  <i className={`${item.icon} footer-link-icon`} aria-hidden="true" />
                  {item.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="footer-column">
            <h3 className="footer-heading">
              <i className="fa-solid fa-place-of-worship footer-heading-icon" aria-hidden="true" />
              Sacred Paths
            </h3>
            <div className="footer-links">
              {footerDeityLinks.map((item) => (
                <Link key={item.href} className="footer-link" href={item.href}>
                  <i className={`${item.icon} footer-link-icon`} aria-hidden="true" />
                  {item.label}
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div className="footer-meta">
          <p>© {new Date().getFullYear()} DivineSV.</p>
          <p>Read, listen, and return when you need a quieter sacred space.</p>
        </div>
      </footer>

      <SiteControls />
    </div>
  );
}
