import * as APIRequest from '../../utils/helpers/APIRequest.helpers';
import apiCryptography from '../../utils/helpers/cryptography.helpers';

export const AccountService = {
  getAccounts,
};

async function getAccounts() {
  try {
    return 'test';
    // return APIRequest.POST(`/api/MW/Callapi`, {
    //   APIurl: `customers/accounts`,
    //   APIdata: apiCryptography.encrypt(
    //     `{Data: 'screen=Accounts&deviceModel=${DEVICE_BROWSER}&platform=3&deviceGuid=${DEVICE_ID}&sessionId=${sessionId}&pagination.limit=100&pagination.offset=0', Token: '${token}'}`
    //   ),
    //   APImethod: 'GET',
    //   APIsystem: 'TEST',
    //   APIreferenceno: 'NA',
    //   APIevent: 'Get Accounts',
    // }).then((res) => {
    //   try {
    //     if (res.data.error) {
    //       return res;
    //     } else {
    //       var result = res;
    //       result.data = JSON.parse(apiCryptography.decrypt(result.data));
    //       console.log(result)
    //       return result;
    //     }
    //   } catch (error) {
    //     return res;
    //   }
    // });
  } catch (err) {}
}
