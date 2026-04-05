import type { Metadata } from 'next';

import { DeityProfilePage } from '@/components/deity-profile-page';
import { deityProfiles } from '@/lib/deity-profiles';

export const metadata: Metadata = {
  title: 'Devi',
  description: 'A devotional page for Devi exploring Adi Parashakti as motherhood, Shakti, protection, beauty, and grace.',
};

export default function DeviPage() {
  return <DeityProfilePage profile={deityProfiles.devi} />;
}
