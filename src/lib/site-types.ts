export type LibraryDocument = {
  slug: string;
  title: string;
  subtitle?: string;
  coverImage?: string;
  kind: 'pdf' | 'stotra';
  href: string;
  fileName?: string;
  url?: string;
  sizeInBytes?: number;
  sizeLabel?: string;
  stotraSlug?: string;
};

export type SiteSettings = {
  headerBannerCopy: string;
  headerBannerPill: string;
  headerNote: string;
  homeAnnouncementTitle: string;
  homeAnnouncementBody: string;
  featuredPdfSlug: string;
  footerBlessings: string[];
  updatedAt: string;
};
