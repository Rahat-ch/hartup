import { getAcheivements } from '../utils/apiRequests';

export default async function achievementReducer(state, action) {
  const copyState = (newState) => newState;
  switch (action.type) {
    case `GET_ACHIEVEMENTS`:
      const achievementState = getAcheivements(copyState);
      return { achievementState };
    default:
      return { ...state };
  }
}
