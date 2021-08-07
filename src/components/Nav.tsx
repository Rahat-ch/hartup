import * as React from 'react';
import Link from 'next/link';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { AUTHENTICATED, NOT_AUTHENTICATOED } from '../utils/constants';

interface Props {
  authState: string;
  handleSignOut: () => void;
}

const Nav: React.FC<Props> = ({ authState, handleSignOut }) => (
  <Disclosure as="nav" className="bg-white shadow">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                <Link href="/">
                  <a className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                    Home
                  </a>
                </Link>
                {authState === AUTHENTICATED && (
                  <Link href="/dashboard">
                    <a className=" text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      Dashboard
                    </a>
                  </Link>
                )}
                {authState === NOT_AUTHENTICATOED && (
                  <Link href="/auth">
                    <a className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      Sign In
                    </a>
                  </Link>
                )}
                {authState === AUTHENTICATED && (
                  <button
                    className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                    onClick={handleSignOut}
                    type="button"
                  >
                    Sign out
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  </Disclosure>
);

export default Nav;
