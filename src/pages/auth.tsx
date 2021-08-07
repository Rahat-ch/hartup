import * as React from 'react';
import { GetServerSidePropsResult, NextPageContext } from 'next';
import AuthForm from '../components/AuthForm';
import { supabase } from '../utils/supabaseclient';

interface Props {
  user: { email: string } | null;
}

export default function Auth() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <AuthForm />
    </div>
  );
}

export async function getServerSideProps({
  req,
}: NextPageContext): Promise<GetServerSidePropsResult<Props>> {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (user) {
    return { redirect: { destination: `/dashboard`, permanent: false } };
  }
  return {
    props: {
      user: {
        email: user.email || ``,
      },
    },
  };
}
