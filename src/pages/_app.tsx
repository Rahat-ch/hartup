import * as React from 'react';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import {
  SIGNED_IN,
  SIGNED_OUT,
  AUTHENTICATED,
  NOT_AUTHENTICATOED,
} from '@/utils/constants';
import { supabase } from '@/utils/supabaseclient';
import { useRouter } from 'next/router';
import { Session, AuthChangeEvent } from '@supabase/gotrue-js/src/lib/types';
import Nav from '@/components/Nav';
import { AchievementProvider } from '@/contexts/AchievementContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [authState, setAuthState] = React.useState(NOT_AUTHENTICATOED);
  async function checkUser() {
    const user = await supabase.auth.user();
    if (user) {
      setAuthState(AUTHENTICATED);
    }
  }
  async function handleAuthChange(
    event: AuthChangeEvent,
    session: Session | null,
  ) {
    await fetch(`/api/auth`, {
      method: `POST`,
      headers: new Headers({ 'Content-Type': `application/json` }),
      credentials: `same-origin`,
      body: JSON.stringify({ event, session }),
    });
  }
  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();
    if (error) console.log(error);
    if (!error) router.push(`/`);
  }
  React.useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleAuthChange(event, session);
        if (event === SIGNED_IN) {
          setAuthState(AUTHENTICATED);
          router.push(`/dashboard`);
        }
        if (event === SIGNED_OUT) {
          setAuthState(NOT_AUTHENTICATOED);
        }
      },
    );
    checkUser();
    return () => {
      if (authListener !== null) {
        authListener.unsubscribe();
      }
    };
  }, [router]);
  return (
    <>
      <Nav authState={authState} handleSignOut={handleSignOut} />
      <AchievementProvider>
        <Component {...pageProps} />
      </AchievementProvider>
    </>
  );
}
