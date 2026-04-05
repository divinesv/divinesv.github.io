import type { Metadata } from 'next';

import { DeityProfilePage } from '@/components/deity-profile-page';
import { deityProfiles } from '@/lib/deity-profiles';

export const metadata: Metadata = {
  title: 'Rama',
  description: 'A devotional page for Rama centered on dharma, compassion, kingship, and steadfast devotion.',
};

export default function RamaPage() {
  return <DeityProfilePage profile={deityProfiles.rama} />;
}
