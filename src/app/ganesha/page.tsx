import type { Metadata } from 'next';

import { DeityProfilePage } from '@/components/deity-profile-page';
import { deityProfiles } from '@/lib/deity-profiles';

export const metadata: Metadata = {
  title: 'Ganesha',
  description: 'A devotional page for Ganesha exploring auspicious beginnings, wisdom, protection, and sacred thresholds.',
};

export default function GaneshaPage() {
  return <DeityProfilePage profile={deityProfiles.ganesha} />;
}
