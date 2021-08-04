import { supabase } from '@/utils/supabaseclient';
import { GetServerSidePropsResult, NextPageContext } from 'next';
import * as React from 'react';
import { basePath } from '../utils/siteConfig';

interface Props {
  user: { email: string } | null;
}

export default function Dashboard({ user }: Props) {
  console.log(user);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1>Dashboard route</h1>
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
