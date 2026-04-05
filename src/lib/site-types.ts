export type PdfDocument = {
  slug: string;
  title: string;
  subtitle?: string;
  coverImage?: string;
  fileName: string;
  url: string;
  sizeInBytes: number;
  sizeLabel: string;
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
