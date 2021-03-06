/* eslint-disable no-console */
import axios from 'axios';
import { NotificationProgrammatic as Notification } from 'buefy';
import { idbKeyval } from './storage';

const errorHandler = (err) => {
  console.error(err);
  Notification.open({
    message: err.message,
    type: 'is-danger',
    closable: false,
    queue: false,
  });
};

export async function getTasks(week, cache = true) {
  const getFunc = async function (lweek) {
    if (!navigator.onLine) return {};
    console.log(lweek);
    const { data } = await axios.get(`full/${lweek}`);
    idbKeyval.set(`week${lweek}`, data.response);
    console.warn(data.response);
    return data.response;
  };

  if (cache === true) {
    const val = await idbKeyval.get(`week${week}`);
    if (val !== null && val !== undefined) {
      setTimeout(() => {
        getFunc(week).then(ok => console.warn(ok));
      }, 1);
      return val;
    }
  }

  try {
    return await getFunc(week);
  } catch (error) {
    errorHandler(error);
    return idbKeyval.get(`week${week}`);
  }
}
