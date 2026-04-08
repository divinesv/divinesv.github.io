import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { PageHero } from '@/components/page-hero';
import { StotraVerseCard } from '@/components/stotra-verse-card';
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
          {stotra.verses.map((verse) => <StotraVerseCard key={verse.label} deity={stotra.deity} verse={verse} />)}

          {stotra.phalaShruti ? (
            <StotraVerseCard deity={stotra.deity} verse={stotra.phalaShruti} />
          ) : null}
        </div>
      </section>
    </>
  );
}
