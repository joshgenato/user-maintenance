import { useContext } from 'react';
import { StoreContext } from '../Store';
import { AccountService } from '../../services/account/accountService';
const useAccounts = () => {
  const { state, actions, dispatch } = useContext(StoreContext);

  const getAccounts = () => {
    AccountService.getAccounts().then((res) => {
      dispatch(actions.accounts.get_accounts(res));
    })
   
  };

  return {
    accountState: state.accounts,
    getAccounts,
  };
};

export default useAccounts;
