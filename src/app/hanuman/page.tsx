import type { Metadata } from 'next';

import { DeityProfilePage } from '@/components/deity-profile-page';
import { deityProfiles } from '@/lib/deity-profiles';

export const metadata: Metadata = {
  title: 'Hanuman',
  description: 'A devotional page for Hanuman exploring fearless seva, Ramabhakti, discipline, strength, and humility.',
};

export default function HanumanPage() {
  return <DeityProfilePage profile={deityProfiles.hanuman} slug="hanuman" />;
}
