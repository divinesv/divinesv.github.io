import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { PageHero } from '@/components/page-hero';
import { getStotraBySlug, stotraEntries } from '@/lib/stotras';

type StotraPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return stotraEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: StotraPageProps): Promise<Metadata> {
  const { slug } = await params;
  const stotra = getStotraBySlug(slug);

  if (!stotra) {
    return {
      title: 'Stotra Not Found',
    };
  }

  return {
    title: stotra.title,
    description: stotra.description,
  };
}

export default async function StotraDetailPage({ params }: StotraPageProps) {
  const { slug } = await params;
  const stotra = getStotraBySlug(slug);

  if (!stotra) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={stotra.eyebrow}
        title={stotra.title}
        description={stotra.introduction}
        asideTitle={stotra.asideTitle}
        asideItems={stotra.asideItems}
        imageSrc={stotra.imageSrc}
        imageAlt={stotra.imageAlt}
      >
        <div className="link-row">
          <Link className="secondary-link" href="/stotras">
            Back to Stotras
          </Link>
        </div>
      </PageHero>

      <section className="section-spacing">
        <div className="stotra-verse-stack">
          {stotra.verses.map((verse) => (
            <article key={verse.label} className="surface-card stotra-verse-card">
              <div className="stotra-verse-header">
                <span className="card-tag">{stotra.deity}</span>
                <strong>{verse.label}</strong>
              </div>

              <div className="stotra-language-grid">
                <div className="stotra-language-block">
                  <span className="stotra-language-label">తెలుగు</span>
                  {verse.telugu.map((line) => (
                    <p key={line} className="stotra-line stotra-line-telugu">
                      {line}
                    </p>
                  ))}
                </div>

                <div className="stotra-language-block">
                  <span className="stotra-language-label">Transliteration</span>
                  {verse.transliteration.map((line) => (
                    <p key={line} className="stotra-line">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="stotra-meaning-block">
                <span className="stotra-language-label">Meaning</span>
                <p className="page-copy">{verse.meaning}</p>
              </div>
            </article>
          ))}

          {stotra.phalaShruti ? (
            <article className="surface-card stotra-phala-card">
              <div className="stotra-verse-header">
                <span className="card-tag">{stotra.deity}</span>
                <strong>{stotra.phalaShruti.label}</strong>
              </div>
              <div className="stotra-language-grid">
                <div className="stotra-language-block">
                  <span className="stotra-language-label">తెలుగు</span>
                  {stotra.phalaShruti.telugu.map((line) => (
                    <p key={line} className="stotra-line stotra-line-telugu">
                      {line}
                    </p>
                  ))}
                </div>

                <div className="stotra-language-block">
                  <span className="stotra-language-label">Transliteration</span>
                  {stotra.phalaShruti.transliteration.map((line) => (
                    <p key={line} className="stotra-line">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <div className="stotra-meaning-block">
                <span className="stotra-language-label">Meaning</span>
                <p className="page-copy">{stotra.phalaShruti.meaning}</p>
              </div>
            </article>
          ) : null}
        </div>
      </section>
    </>
  );
}
