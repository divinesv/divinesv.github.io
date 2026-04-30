import type { Metadata } from 'next';

import { DeityProfilePage } from '@/components/deity-profile-page';
import { deityProfiles } from '@/lib/deity-profiles';

export const metadata: Metadata = {
  title: 'Krishna',
  description: 'A devotional page for Krishna exploring leela, compassion, Bhagavad Gita wisdom, and intimate bhakti.',
};

export default function KrishnaPage() {
  return <DeityProfilePage profile={deityProfiles.krishna} slug="krishna" />;
}
