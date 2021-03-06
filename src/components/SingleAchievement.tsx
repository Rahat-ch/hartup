import * as React from 'react';
import { AchievementContext } from '@/contexts/AchievementContext';
import AchievementUpdater from './AchievementUpdater';
import EmptyAcheivement from './EmptyAcheivement';

const SingleAchievement = ({ open, setOpen }) => {
  const { refreshAcheivementState, userAcheivements, currentId } =
    React.useContext(AchievementContext);
  console.log(userAcheivements);
  const [currentAchievement, setCurrentAchievement] = React.useState({});
  React.useEffect(() => {
    setCurrentAchievement(
      userAcheivements.find((achievement) => achievement.id === currentId),
    );
  }, [userAcheivements, currentId]);
  if (!currentAchievement) {
    return (
      <div className="space-y-6 lg:col-start-1 lg:col-span-2">
        <section aria-labelledby="current-achievement">
          <div className="bg-white shadow sm:rounded-lg">
            <EmptyAcheivement />
          </div>
        </section>
      </div>
    );
  }
  const { description, challenges, impact, id } = currentAchievement;
  return (
    <div className="space-y-6 lg:col-start-1 lg:col-span-2">
      <section aria-labelledby="current-achievement">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2
              id="current-achievement"
              className="text-lg leading-6 font-medium text-gray-900"
            >
              Achievement Information
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Click on an achievement on your timeline to see more details!
            </p>
          </div>
          <AchievementUpdater
            content={description}
            label="Description"
            id={id}
            refresh={refreshAcheivementState}
            open={open}
            setOpen={setOpen}
          />
          <AchievementUpdater
            content={challenges}
            label="Challenges"
            id={id}
            refresh={refreshAcheivementState}
            open={open}
            setOpen={setOpen}
          />
          <AchievementUpdater
            content={impact}
            label="Impact"
            id={id}
            refresh={refreshAcheivementState}
            open={open}
            setOpen={setOpen}
          />
        </div>
      </section>
    </div>
  );
};

export default SingleAchievement;
