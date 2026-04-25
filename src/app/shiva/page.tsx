import type { Metadata } from 'next';

import { DeityProfilePage } from '@/components/deity-profile-page';
import { deityProfiles } from '@/lib/deity-profiles';

export const metadata: Metadata = {
  title: 'Shiva',
  description: 'A devotional page for Shiva exploring Mahadeva as silence, power, mantra, grace, and inner freedom.',
};

export default function ShivaPage() {
  return <DeityProfilePage profile={deityProfiles.shiva} slug="shiva" />;
}
