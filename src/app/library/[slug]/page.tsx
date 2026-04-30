import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { PageHero } from '@/components/page-hero';
import { StotraVerseCard } from '@/components/stotra-verse-card';
import { getLibraryDocumentBySlug, getLibraryDocuments } from '@/lib/pdf-library';
import { getStotraBySlug } from '@/lib/stotras';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const library = await getLibraryDocuments();
  return library.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getLibraryDocumentBySlug(slug);

  if (!entry) {
    return {
      title: 'Library Entry Not Found',
    };
  }

  if (entry.kind === 'stotra' && entry.stotraSlug) {
    const stotra = getStotraBySlug(entry.stotraSlug);

    if (stotra) {
      return {
        title: stotra.title,
        description: stotra.description,
      };
    }
  }

  return {
    title: entry.title,
    description: `Read ${entry.title} on DivineSV.`,
  };
}

export default async function PdfDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = await getLibraryDocumentBySlug(slug);

  if (!entry) {
    notFound();
  }

  if (entry.kind === 'stotra' && entry.stotraSlug) {
    const stotra = getStotraBySlug(entry.stotraSlug);

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
            <Link className="secondary-link" href="/library">
              Back to Library
            </Link>
          </div>
        </PageHero>

        <section className="section-spacing">
          <div className="stotra-verse-stack">
            {stotra.verses.map((verse) => <StotraVerseCard key={verse.label} deity={stotra.deity} verse={verse} />)}

            {stotra.phalaShruti ? <StotraVerseCard deity={stotra.deity} verse={stotra.phalaShruti} /> : null}
          </div>
        </section>
      </>
    );
  }

  if (!entry.url) {
    notFound();
  }

  return (
    <>
      <section className="pdf-reader-header section-spacing">
        <div className="devotional-panel">
          <span className="eyebrow">PDF Reader</span>
          <h1 className="page-title">{entry.title}</h1>
          <div className="link-row">
            <Link className="secondary-link" href="/library">
              Back to Library
            </Link>
            <a className="primary-link" href={entry.url} target="_blank" rel="noreferrer">
              Open Original PDF
            </a>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="pdf-viewer-shell">
          <iframe className="pdf-viewer-frame" src={`${entry.url}#toolbar=0`} title={entry.title} />
        </div>
      </section>
    </>
  );
}
