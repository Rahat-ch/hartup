/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import { supabase } from '../utils/supabaseclient';

const AuthForm: React.FC = () => {
  const [email, setEmail] = React.useState(``);
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    const { error, data } = await supabase.auth.signIn({ email });
    if (error) {
      console.log({ error });
    } else {
      if (data) console.log(data);
      alert(`a magical link was sent to your email address`);
    }
  };
  return (
    <div className="max-w-md w-full space-y-8">
      <div>
        {/* <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          /> */}
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address">Email address</label>
            <input
              id="email-address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
