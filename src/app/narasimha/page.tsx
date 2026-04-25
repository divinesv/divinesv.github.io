import type { Metadata } from 'next';

import { DeityProfilePage } from '@/components/deity-profile-page';
import { deityProfiles } from '@/lib/deity-profiles';

export const metadata: Metadata = {
  title: 'Narasimha',
  description: 'A devotional page for Narasimha highlighting fierce protection, grace toward devotees, and Prahlada bhakti.',
};

export default function NarasimhaPage() {
  return <DeityProfilePage profile={deityProfiles.narasimha} slug="narasimha" />;
}
