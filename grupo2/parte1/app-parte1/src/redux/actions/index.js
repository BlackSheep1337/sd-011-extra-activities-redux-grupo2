export const GET_PERFIS = 'GET_PERFIS';
export const TOGGLE_LOAD = 'TOGGLE_LOAD';
export const CHANGE_NAME = 'CHANGE_NAME';

export const getPERFIS = (payload) => ({
  type: GET_PERFIS,
  payload
});

export const toggleLoad = () => ({
  type: TOGGLE_LOAD,
});

export const getNAME = (payload) => ({
  type: CHANGE_NAME,
  payload
});
