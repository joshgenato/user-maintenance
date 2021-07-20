import { types } from './_types';

export const actions = {
  get_accounts: (accounts) => ({
    type: types.GET_ACCOUNTS,
    value: accounts,
  }),
};
