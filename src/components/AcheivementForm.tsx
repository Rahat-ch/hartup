import * as React from 'react';
import { ModalContext } from '@/contexts/ModalContext';
import CheckBox from './CheckBox';
import TextArea from './TextArea';
import { addAcheivement } from '../utils/apiRequests';
import { AchievementContext } from '../contexts/AchievementContext';

const AcheivementForm = () => {
  // TODO convert to useReducer plz
  const { refreshAcheivementState, setCurrentId } =
    React.useContext(AchievementContext);
  const [canShare, setCanshare] = React.useState(false);
  const [description, setDescription] = React.useState(``);
  const [impact, setImpact] = React.useState(
    `What impact did this have? Did you create something that made revenue?`,
  );
  const [challenges, setChallenges] = React.useState(
    `What are some challenges you faced?`,
  );
  const [showMore, setShowMore] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [disabledMessage, setDisabledMessage] = React.useState(``);
  const { closeModal } = React.useContext(ModalContext);
  // oh god that's alot of state
  const setStuff = (stuff) => console.log(stuff);
  React.useEffect(() => {
    if (description) setIsDisabled(false);
  }, [description]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isDisabled) {
      setDisabledMessage(`Please Enter a description`);
    } else {
      setDisabledMessage(``);
      addAcheivement({
        description,
        isallowedontimeline: canShare,
        impact,
        challenges,
        refresh: refreshAcheivementState,
        closeModal,
        setCurrentId,
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 divide-y divide-gray-200"
    >
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Add an Acheivement
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Let&apos;s start building your timeline!
            </p>
          </div>

          <TextArea
            title="Description (required)"
            handleChange={setDescription}
            text={description}
          />
        </div>
        <CheckBox setBool={setCanshare} />

        {!showMore && (
          <>
            <button
              type="button"
              onClick={() => setShowMore(true)}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add More Info
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
            <p>{disabledMessage}</p>
          </>
        )}

        {showMore && (
          <>
            <div className="mt-4">
              <TextArea title="Impact" handleChange={setImpact} text={impact} />
              <TextArea
                title="Challenges"
                handleChange={setChallenges}
                text={challenges}
              />
            </div>
            <button
              onClick={() => setShowMore(false)}
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add less info
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
            <p>{disabledMessage}</p>
          </>
        )}
      </div>
    </form>
  );
};

export default AcheivementForm;
