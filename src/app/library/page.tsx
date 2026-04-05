import type { Metadata } from 'next';

import { MediaHub } from '@/components/media-hub';
import { PageHero } from '@/components/page-hero';
import { bhagavadGitaStats } from '@/lib/bhagavad-gita';
import { devotionalImagePools, pickImage } from '@/lib/devotional-images';
import { getMusicTracks, mediaVideos, musicEmbeds } from '@/lib/media';
import { getPdfLibrary } from '@/lib/pdf-library';

export const metadata: Metadata = {
  title: 'Library and Media',
  description:
    'Browse DivineSV documents, devotional music, spiritual videos, and scripture experiences from one shared reading and listening space.',
};

export default async function LibraryPage() {
  const [library, tracks] = await Promise.all([getPdfLibrary(), getMusicTracks()]);

  return (
    <>
      <PageHero
        eyebrow="Library and Media"
        title="Read, listen, and reflect in one sacred space"
        description="A single destination for devotional documents, downloadable PDFs, immersive scripture study, music, and spiritual videos."
        asideTitle="Mandir Collection"
        asideItems={[
          `${library.length} public PDFs currently published`,
          `${tracks.length} local devotional tracks ready to play`,
          `${mediaVideos.length} embedded spiritual video available now`,
          `${bhagavadGitaStats.verseCount} Bhagavad Gita verses available in the new companion`,
        ]}
        imageSrc={pickImage(devotionalImagePools.temples, 1).src}
        imageAlt={pickImage(devotionalImagePools.temples, 1).alt}
        accentTopImageSrc={pickImage(devotionalImagePools.gita, 3).src}
        accentTopImageAlt={pickImage(devotionalImagePools.gita, 3).alt}
        accentBottomImageSrc={pickImage(devotionalImagePools.krishna, 5).src}
        accentBottomImageAlt={pickImage(devotionalImagePools.krishna, 5).alt}
      />

      <MediaHub
        documents={library}
        gitaVerseCount={bhagavadGitaStats.verseCount}
        musicEmbeds={musicEmbeds}
        tracks={tracks}
        videos={mediaVideos}
      />
    </>
  );
}
