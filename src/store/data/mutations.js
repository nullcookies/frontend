import Vue from 'vue';

export function week(state, data) {
  // eslint-disable-next-line no-shadow
  const { week, obj, $state } = data;
  Vue.set(state.weeks, week, obj);
  $state.loaded();
}

export function agenda(state, data) {
  // eslint-disable-next-line no-shadow
  const { week, obj } = data;
  Vue.set(state.agenda, week, obj);
  // $state.loaded();
}