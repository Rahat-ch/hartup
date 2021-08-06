import * as React from 'react';

interface Props {
  title: string;
  handleChange: React.Dispatch<React.SetStateAction<string>>;
  text: string;
}

const TextArea: React.FC<Props> = ({ title, handleChange, text }) => (
  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
    <div className="sm:col-span-6">
      <label
        htmlFor="Description"
        className="block text-sm font-medium text-gray-700"
      >
        {title}
        <div className="mt-1">
          <textarea
            id={title}
            name={title}
            rows={5}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
            value={text}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </label>
    </div>
  </div>
);

export default TextArea;
