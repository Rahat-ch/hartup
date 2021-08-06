import * as React from 'react';
import { UserIcon } from '@heroicons/react/solid';
import { ModalContext } from '@/contexts/ModalContext';
import { AchievementContext } from '../contexts/AchievementContext';
import AcheievementModal from './AcheievementModal';

const UserTimeline = () => {
  const { open, openModal, closeModal } = React.useContext(ModalContext);
  const { userAcheivements, setCurrentId, currentId } =
    React.useContext(AchievementContext);
    console.log({currentId})
  return (
    <section
      aria-labelledby="timeline-title"
      className="lg:col-start-3 lg:col-span-1"
    >
      <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
        <h2 id="timeline-title" className="text-lg font-medium text-gray-900">
          Timeline
        </h2>
        <div className="mt-6 flow-root">
          <AcheievementModal open={open} setOpen={closeModal} />
          <ul className="-mb-8">
            {userAcheivements &&
              userAcheivements.map((item, itemIdx) => {
                const date = new Date(item.inserted_at);
                const month = date.getUTCMonth() + 1;
                const day = date.getUTCDate();
                return (
                  <li key={item.id}>
                    <div className="relative pb-8">
                      {itemIdx !== userAcheivements.length - 1 ? (
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="bg-gray-400 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white">
                            <UserIcon
                              className="w-5 h-5 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <button
                              type="button"
                              onClick={() => setCurrentId(item.id)}
                              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              <p className="text-sm text-left text-gray-500">
                                {item.description}
                              </p>
                            </button>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            <time dateTime={item.inserted_at}>
                              {month}/{day}
                            </time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="mt-6 flex flex-col justify-stretch">
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add More Achievements
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserTimeline;
