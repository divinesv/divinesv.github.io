import type { Metadata } from 'next';

import { DeityProfilePage } from '@/components/deity-profile-page';
import { deityProfiles } from '@/lib/deity-profiles';

export const metadata: Metadata = {
  title: 'Ayyappa',
  description: 'A devotional page for Ayyappa exploring vrata, pilgrimage, discipline, and the grace of Hariharaputra.',
};

export default function AyyappaPage() {
  return <DeityProfilePage profile={deityProfiles.ayyappa} />;
}
