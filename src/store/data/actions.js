/* eslint-disable no-console */
import { getTasks } from '../../helpers/DataProvider';

export async function tasks({ commit }, { week, $state }) {
  // console.info(week);
  const Tasks = await getTasks(week);
  // console.error(Tasks);
  commit('week', {
    week,
    obj: Tasks,
    $state,
  });
}
