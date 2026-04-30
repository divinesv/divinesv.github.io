import type { Metadata } from 'next';

import { MediaHub } from '@/components/media-hub';
import { PageHero } from '@/components/page-hero';
import { devotionalImagePools, pickImage } from '@/lib/devotional-images';
import { bhagavadGitaStats } from '@/lib/bhagavad-gita';
import { getMusicTracks, mediaVideos, musicEmbeds } from '@/lib/media';
import { getLibraryDocuments } from '@/lib/pdf-library';

export const metadata: Metadata = {
  title: 'Media',
  description: 'Listen to devotional music, watch spiritual videos, and open sacred documents from one shared DivineSV space.',
};

export default async function MediaPage() {
  const [documents, tracks] = await Promise.all([getLibraryDocuments(), getMusicTracks()]);

  return (
    <>
      <PageHero
        eyebrow="Library and Media"
        title="Read, listen, and reflect in one sacred space"
        description="This destination now brings devotional documents, local music, and spiritual videos together so visitors can move between them without leaving the page."
        asideTitle="Media Flow"
        asideItems={[
          `${documents.length} sacred documents ready to open`,
          `${tracks.length} local devotional tracks ready to play`,
          `${mediaVideos.length} embedded spiritual video available now`,
          `${bhagavadGitaStats.verseCount} Bhagavad Gita verses available in the new companion`,
        ]}
        imageSrc={pickImage(devotionalImagePools.gita, 3).src}
        imageAlt={pickImage(devotionalImagePools.gita, 3).alt}
        accentTopImageSrc={pickImage(devotionalImagePools.krishna, 5).src}
        accentTopImageAlt={pickImage(devotionalImagePools.krishna, 5).alt}
        accentBottomImageSrc={pickImage(devotionalImagePools.hanuman, 1).src}
        accentBottomImageAlt={pickImage(devotionalImagePools.hanuman, 1).alt}
      />

      <MediaHub
        documents={documents}
        gitaVerseCount={bhagavadGitaStats.verseCount}
        musicEmbeds={musicEmbeds}
        tracks={tracks}
        videos={mediaVideos}
      />
    </>
  );
}
