/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import { Switch } from '@headlessui/react';

interface Props {
  setBool: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckBox: React.FC<Props> = ({ setBool }) => (
  <fieldset className="space-y-5">
    <legend className="sr-only">Notifications</legend>
    <div className="relative flex items-start">
      <div className="flex items-center h-5">
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          onChange={(e) => setBool(e.target.checked)}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="comments" className="font-medium text-gray-700">
          Share
        </label>
        <p id="comments-description" className="text-gray-500">
          Checking this will anonymously share your acheivement on our public
          feed.
        </p>
      </div>
    </div>
    <div />
    <div />
  </fieldset>
);

export default CheckBox;
