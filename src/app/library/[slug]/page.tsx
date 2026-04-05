import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getPdfBySlug, getPdfLibrary } from '@/lib/pdf-library';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const library = await getPdfLibrary();
  return library.map((pdf) => ({ slug: pdf.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pdf = await getPdfBySlug(slug);

  if (!pdf) {
    return {
      title: 'PDF Not Found',
    };
  }

  return {
    title: pdf.title,
    description: `Read ${pdf.title} on DivineSV.`,
  };
}

export default async function PdfDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pdf = await getPdfBySlug(slug);

  if (!pdf) {
    notFound();
  }

  return (
    <>
      <section className="pdf-reader-header section-spacing">
        <div className="devotional-panel">
          <span className="eyebrow">PDF Reader</span>
          <h1 className="page-title">{pdf.title}</h1>
          <div className="link-row">
            <Link className="secondary-link" href="/library">
              Back to Library
            </Link>
            <a className="primary-link" href={pdf.url} target="_blank" rel="noreferrer">
              Open Original PDF
            </a>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="pdf-viewer-shell">
          <iframe className="pdf-viewer-frame" src={`${pdf.url}#toolbar=0`} title={pdf.title} />
        </div>
      </section>
    </>
  );
}
