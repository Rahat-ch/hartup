import * as React from 'react';
import achievementReducer from '@/reducers/achievementReducer';
import { getAcheivements } from '@/utils/apiRequests';

export const AchievementContext = React.createContext(null);

export const initialState = { dispatch: () => {} };

export function AchievementProvider({ children }) {
  // TODO implement reducer
  const [userAcheivements, setUserAcheivments] = React.useState([]);
  const [currentId, setCurrentId] = React.useState(-1);
  const refreshAcheivementState = () => {
    getAcheivements(setUserAcheivments);
  };
  React.useEffect(() => { 
    refreshAcheivementState();
  }, []);
  return (
    <AchievementContext.Provider
      value={{
        userAcheivements,
        refreshAcheivementState,
        currentId,
        setCurrentId,
      }}
    >
      {children}
    </AchievementContext.Provider>
  );
}
