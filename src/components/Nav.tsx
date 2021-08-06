import * as React from 'react';
import Link from 'next/link';
import { AUTHENTICATED, NOT_AUTHENTICATOED } from '../utils/constants';

interface Props {
  authState: string;
  handleSignOut: () => void;
}

const Nav: React.FC<Props> = ({ authState, handleSignOut }) => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    {authState === AUTHENTICATED && (
      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>
    )}
    {authState === NOT_AUTHENTICATOED && (
      <Link href="/auth">
        <a>Sign In</a>
      </Link>
    )}
    {authState === AUTHENTICATED && (
      <button onClick={handleSignOut} type="button">
        Sign out
      </button>
    )}
  </nav>
);

export default Nav;
