import siteSettings from '@/data/site-settings.json';
import type { SiteSettings } from '@/lib/site-types';

export function getSiteSettings(): SiteSettings {
  return siteSettings as SiteSettings;
}
