import { supabase } from '@/utils/supabaseclient';
import { GetServerSidePropsResult, NextPageContext } from 'next';
import * as React from 'react';
import { CheckIcon, ThumbUpIcon, UserIcon } from '@heroicons/react/solid';
import SingleAchievement from '@/components/SingleAchievement';
import { AchievementContext } from '@/contexts/AchievementContext';
import UserTimeline from '@/components/UserTimeline';
import { getAcheivements } from '../utils/apiRequests';
import AcheievementModal from '../components/AcheievementModal';
import ExampleModal from '../components/ExampleModal';

interface Props {
  user: { email: string } | null;
}

export default function Dashboard({ user }: Props) {

  return (
    <div className="relative min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <SingleAchievement />
          <UserTimeline />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps({
  req,
}: NextPageContext): Promise<GetServerSidePropsResult<Props>> {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) {
    return { redirect: { destination: `/auth`, permanent: false } };
  }
  return {
    props: {
      user: {
        email: user.email || ``,
      },
    },
  };
}
