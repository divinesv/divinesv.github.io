import type { Metadata } from 'next';

import { DeityProfilePage } from '@/components/deity-profile-page';
import { deityProfiles } from '@/lib/deity-profiles';

export const metadata: Metadata = {
  title: 'Vishnu',
  description: 'A devotional page for Vishnu exploring Narayana as refuge, preservation, grace, avatars, and dharma.',
};

export default function VishnuPage() {
  return <DeityProfilePage profile={deityProfiles.vishnu} />;
}
