import { promises as fs } from 'fs';
import path from 'path';

import { devotionalImagePools, pickImage, type DevotionalImage } from '@/lib/devotional-images';

export type MediaTrack = {
  fileName: string;
  title: string;
  url: string;
  image: DevotionalImage;
};

export type MediaEmbed = {
  id: string;
  title: string;
  embedUrl: string;
};

export type MediaVideo = MediaEmbed;
export type MusicEmbed = MediaEmbed;

const musicDirectory = path.join(process.cwd(), 'public', 'music');

export const musicEmbeds: MusicEmbed[] = [
  {
    id: 'music-embed-1',
    title: 'Maha Ganapatim',
    embedUrl: 'https://www.youtube.com/embed/Ugb8Vd43cxM?si=UdlmMzLCGVw_-t5X',
  },
  {
    id: 'music-embed-2',
    title: 'Om Chanting',
    embedUrl: 'https://www.youtube.com/embed/SBiwLibZqfw?si=m6CdCxL5LA7Lug70',
  },
];

export const mediaVideos: MediaVideo[] = [
  {
    id: 'bhagavad-gita-1',
    title: 'Bhagavad Gita',
    embedUrl: 'https://www.youtube.com/embed/gP3eD8az5N0?si=JZqjD4CbOoEastK7',
  },
  {
    id: 'bhagavad-gita-5',
    title: 'Bhaja Govindam',
    embedUrl: 'https://www.youtube.com/embed/px1lnU0aN6w?si=GNBVUUFWW4Nv9lt9',
  },
  {
    id: 'bhagavad-gita-4',
    title: 'Vishnu Sahasra Namam',
    embedUrl: 'https://www.youtube.com/embed/0tubv1OKDjg?si=4UYwZR8ZLA1WuBbn',
  },
  {
    id: 'bhagavad-gita-2',
    title: 'Madhurastakam',
    embedUrl: 'https://www.youtube.com/embed/YmqXIAwi3b8?si=bICCQvr0tla-eqEb',
  },
  {
    id: 'bhagavad-gita-3',
    title: 'Aigiri Nandini',
    embedUrl: 'https://www.youtube.com/embed/1Yycc3tejNw?si=idhzPckXsrLiA6eR',
  },
  {
    id: 'bhagavad-gita-6',
    title: 'Om Chanting',
    embedUrl: 'https://www.youtube.com/embed/SBiwLibZqfw?si=m6CdCxL5LA7Lug70',
  },
];

function createTitle(fileName: string) {
  return fileName
    .replace(/\.[^.]+$/i, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function imageForTrackTitle(title: string, index: number): DevotionalImage {
  const normalized = title.toLowerCase();

  if (normalized.includes('hanuman') || normalized.includes('anjaneya') || normalized.includes('ramadootha')) {
    return pickImage(devotionalImagePools.hanuman, index);
  }

  if (normalized.includes('rama') || normalized.includes('raghunandana')) {
    return pickImage(devotionalImagePools.rama, index);
  }

  if (normalized.includes('krishna')) {
    return pickImage(devotionalImagePools.krishna, index);
  }

  if (normalized.includes('shiva')) {
    return pickImage(devotionalImagePools.shiva, index);
  }

  if (normalized.includes('vishnu') || normalized.includes('venkateswara') || normalized.includes('narayana')) {
    return pickImage(devotionalImagePools.vishnu, index);
  }

  if (normalized.includes('devi') || normalized.includes('durga') || normalized.includes('amma')) {
    return pickImage(devotionalImagePools.devi, index);
  }

  if (normalized.includes('ganesha') || normalized.includes('ganapati') || normalized.includes('vinayaka')) {
    return pickImage(devotionalImagePools.ganesha, index);
  }

  if (normalized.includes('gita') || normalized.includes('arjuna')) {
    return pickImage(devotionalImagePools.gita, index);
  }

  return pickImage(devotionalImagePools.temples, index);
}

export async function getMusicTracks(): Promise<MediaTrack[]> {
  try {
    const files = await fs.readdir(musicDirectory);
    const musicFiles = files.filter((file) => /\.(m4a|mp3|wav|ogg)$/i.test(file));

    return musicFiles
      .sort((left, right) => left.localeCompare(right))
      .map((fileName, index) => {
        const title = createTitle(fileName);

        return {
          fileName,
          title,
          url: `/music/${encodeURIComponent(fileName)}`,
          image: imageForTrackTitle(title, index),
        };
      });
  } catch {
    return [];
  }
}
