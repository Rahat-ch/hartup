import React from 'react';
import { PencilAltIcon } from '@heroicons/react/solid';
import ContentBox from './ContentBox';
import TextArea from './TextArea';
import { upDateAcheivements } from '../utils/apiRequests';

interface Props {
  content: string;
  label: string;
  id: number;
  refresh: () => void;
}

const AchievementUpdater: React.FC<Props> = ({
  content,
  label,
  id,
  refresh,
}) => {
  console.log(`hello`);
  const [text, setText] = React.useState(``);
  const [isEditing, setIsEditing] = React.useState(false);
  React.useEffect(() => {
    if (!text) {
      setText(content);
    }
  }, [content, text]);
  const handleSubmit = (e) => {
    e.preventDefault();
    upDateAcheivements({
      id,
      refresh,
      updateKey: label.toLowerCase(),
      updateValue: text,
    });
    setIsEditing(false);
  };
  return (
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
      <button
        type="button"
        className="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
        onClick={() => setIsEditing(!isEditing)}
      >
        <PencilAltIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <TextArea title={label} handleChange={setText} text={text} />
          <button
            type="submit"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </form>
      ) : (
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <ContentBox label={label} content={content} />
        </dl>
      )}
    </div>
  );
};

export default AchievementUpdater;
