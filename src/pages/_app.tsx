import * as React from 'react';
import 'tailwindcss/tailwind.css';
import {
  SIGNED_IN,
  SIGNED_OUT,
  AUTHENTICATED,
  NOT_AUTHENTICATOED,
} from '@/utils/constants';
import { supabase } from '@/utils/supabaseclient';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [authState, setAuthState] = React.useState(NOT_AUTHENTICATOED);
  async function checkUser() {
    const user = await supabase.auth.user();
    if (user) {
      setAuthState(`authenticated`);
    }
  }
  async function handleAuthChange(event, session) {
    await fetch(`/api/auth`, {
      method: `POST`,
      headers: new Headers({ 'Content-Type': `application/json` }),
      credentials: `same-origin`,
      body: JSON.stringify({ event, session }),
    });
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
      authListener.unsubscribe();
    };
  }, []);
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        {authState === NOT_AUTHENTICATOED && (
          <Link href="/auth">
            <a>Sign In</a>
          </Link>
        )}
        {authState === AUTHENTICATED && <button>Sign out</button>}
      </nav>
      <Component {...pageProps} />
    </>
  );
}
