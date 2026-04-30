import { promises as fs } from 'fs';
import path from 'path';

import type { LibraryDocument } from '@/lib/site-types';

const pdfDirectory = path.join(process.cwd(), 'public', 'pdfs');

const pdfCatalog: Record<
  string,
  {
    title: string;
    subtitle?: string;
    coverImage: string;
  }
> = {
  'ashtavakra-samhita': {
    title: 'Ashtavakra Samhita',
    subtitle: 'Advaita wisdom text',
    coverImage: '/images/Kailash.jpg',
  },
  harivarasanam: {
    title: 'Harivarasanam',
    subtitle: 'Temple hymn of devotion',
    coverImage: '/images/Venkateswara.jpg',
  },
  'nirvana-shatakam': {
    title: 'Nirvana Shatakam',
    subtitle: 'By Adi Shankaracharya',
    coverImage: '/images/Shiva.jpeg',
  },
  sanskrit: {
    title: 'Sanskrit Reader',
    subtitle: 'Language and script practice',
    coverImage: '/images/Krishna.jpg',
  },
  'srihanumanchalisa': {
    title: 'Sri Hanuman Chalisa',
    subtitle: 'Devotional stotra',
    coverImage: '/images/hanuman.jpg',
  },
  'lalitha-sahasranama-stotram': {
    title: 'Lalita Sahasranama',
    subtitle: 'Sacred Devi nama stotram',
    coverImage: '/images/Devi2.jpg',
  },
  'vishnu-sahashranamas': {
    title: 'Vishnu Sahasranamam',
    subtitle: 'Sacred nama stotram',
    coverImage: '/images/Vishnu.jpg',
  },
};

const curatedLibraryEntries: LibraryDocument[] = [
  {
    slug: 'lakshmi-narasimha-ashtottara-sata-namavali',
    title: 'Lakshmi Narasimha Ashtottara Sata Namavali',
    subtitle: '108 sacred names of Lord Narasimha',
    coverImage: '/images/Narsimha.jpg',
    kind: 'stotra',
    href: '/library/lakshmi-narasimha-ashtottara-sata-namavali',
    stotraSlug: 'lakshmi-narasimha-ashtottara-sata-namavali',
  },
];

function createSlug(fileName: string) {
  return fileName
    .replace(/\.pdf$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function createTitle(fileName: string) {
  return fileName
    .replace(/\.pdf$/i, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatBytes(size: number) {
  if (size >= 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  }

  if (size >= 1024) {
    return `${Math.round(size / 1024)} KB`;
  }

  return `${size} B`;
}

export async function getLibraryDocuments(): Promise<LibraryDocument[]> {
  try {
    const files = await fs.readdir(pdfDirectory);
    const pdfFiles = files.filter((file) => file.toLowerCase().endsWith('.pdf'));

    const pdfDocs = await Promise.all(
      pdfFiles.map(async (fileName) => {
        const slug = createSlug(fileName);
        const filePath = path.join(pdfDirectory, fileName);
        const stats = await fs.stat(filePath);
        const catalogEntry = pdfCatalog[slug];

        return {
          slug,
          title: catalogEntry?.title ?? createTitle(fileName),
          subtitle: catalogEntry?.subtitle,
          coverImage: catalogEntry?.coverImage,
          kind: 'pdf' as const,
          href: `/library/${slug}`,
          fileName,
          url: `/pdfs/${encodeURIComponent(fileName)}`,
          sizeInBytes: stats.size,
          sizeLabel: formatBytes(stats.size),
        };
      }),
    );

    return [...pdfDocs, ...curatedLibraryEntries].sort((a, b) => a.title.localeCompare(b.title));
  } catch {
    return curatedLibraryEntries;
  }
}

export async function getLibraryDocumentBySlug(slug: string) {
  const library = await getLibraryDocuments();
  return library.find((entry) => entry.slug === slug) ?? null;
}
