import Link from 'next/link';

import { PageHero } from '@/components/page-hero';

export default function NotFoundPage() {
  return (
    <>
      <PageHero
        eyebrow="404 | Page Not Found"
        title="Page not found"
        description="This page is not available."
        asideTitle="Continue With"
        asideItems={[
          'Return to the homepage',
          'Browse the library and PDFs',
          'Open the stotras section',
          'Explore Shiva, Vishnu, Devi, Ganesha, or Hanuman',
        ]}
        imageSrc="/images/Temple2.jpg"
        imageAlt="Temple image for the 404 page"
        accentTopImageSrc="/images/krishna.jpg"
        accentTopImageAlt="Krishna accent for the 404 page"
        accentBottomImageSrc="/images/hanuman.jpg"
        accentBottomImageAlt="Hanuman accent for the 404 page"
      >
        <div className="link-row">
          <Link className="primary-link" href="/">
            Return Home
          </Link>
          <Link className="secondary-link" href="/library">
            Open Library
          </Link>
        </div>
      </PageHero>

      <section className="section-spacing">
        <div className="content-grid">
          <Link className="surface-card" href="/stotras">
            <span className="card-tag">Sacred Texts</span>
            <h2 className="card-title">Stotras</h2>
            <p>Continue into Telugu-supported stotras with transliteration and meaning.</p>
          </Link>

          <Link className="surface-card" href="/library/bhagavad-gita">
            <span className="card-tag">Scripture</span>
            <h2 className="card-title">Bhagavad Gita</h2>
            <p>Open the guided Gita reading experience with featured verses and reflection modes.</p>
          </Link>

          <Link className="surface-card" href="/about">
            <span className="card-tag">Project</span>
            <h2 className="card-title">About DivineSV</h2>
            <p>Read the purpose and direction of the site, then navigate from there.</p>
          </Link>
        </div>
      </section>
    </>
  );
}
