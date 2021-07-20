import { actions } from './_actions';
import { types } from './_types';

export const initialState = {
  accounts: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.GET_ACCOUNTS:
      return {
        ...state,
        accounts: action.value,
      };
    default:
      return state;
  }
};

export default {
  initialState,
  actions,
  reducer,
};
