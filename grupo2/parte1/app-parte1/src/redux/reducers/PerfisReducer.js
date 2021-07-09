import { GET_PERFIS, TOGGLE_LOAD, CHANGE_NAME } from '../actions'

const INITIAL_STATE = {
  perfis: [],
  loading: false,
  name: '',
}

const PerfilsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case GET_PERFIS:
      return {
        ...state,
        perfis: payload,
      }
      case TOGGLE_LOAD:
      return {
        ...state,
        loading: !state.loading,
      }
      case CHANGE_NAME:
        return {
          ...state,
          name: payload,
        }
    default:
      return state;
  }
}

export default PerfilsReducer;
