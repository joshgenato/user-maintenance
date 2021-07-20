var CryptoJS = require('crypto-js');
const PSBAPIKEY = process.env.REACT_APP_KEY;
const PSBAPIIV = process.env.REACT_APP_IV;

const apiCryptography = {
  decrypt,
  encrypt,
};

function encrypt(input) {
  var parsedIV = CryptoJS.enc.Utf8.parse(PSBAPIIV);
  var parsedKEY = CryptoJS.enc.Utf8.parse(PSBAPIKEY);
  var keySpec = CryptoJS.PBKDF2(parsedKEY, parsedIV, {
    keySize: 256 / 32 + 128 / 32,
    iterations: 1000,
    hasher: CryptoJS.algo.SHA1,
  });
  var hexKeyAndIv = CryptoJS.enc.Hex.stringify(keySpec);
  var newkey = CryptoJS.enc.Hex.parse(hexKeyAndIv.substring(0, 64));
  var newiv = CryptoJS.enc.Hex.parse(
    hexKeyAndIv.substring(64, hexKeyAndIv.length)
  );

  var encrypted = CryptoJS.AES.encrypt(input, newkey, { iv: newiv });
  var strEncrypted = encrypted.toString();
  return strEncrypted;
}

function decrypt(input) {
  var parsedIV = CryptoJS.enc.Utf8.parse(PSBAPIIV);
  var parsedKEY = CryptoJS.enc.Utf8.parse(PSBAPIKEY);
  var keySpec = CryptoJS.PBKDF2(parsedKEY, parsedIV, {
    keySize: 256 / 32 + 128 / 32,
    iterations: 1000,
    hasher: CryptoJS.algo.SHA1,
  });
  var hexKeyAndIv = CryptoJS.enc.Hex.stringify(keySpec);
  var newkey = CryptoJS.enc.Hex.parse(hexKeyAndIv.substring(0, 64));
  var newiv = CryptoJS.enc.Hex.parse(
    hexKeyAndIv.substring(64, hexKeyAndIv.length)
  );

  var decrypted = CryptoJS.AES.decrypt(input, newkey, {
    iv: newiv,
  });

  var strEncrypted = CryptoJS.enc.Utf8.stringify(decrypted);
  return strEncrypted;
}

export default apiCryptography;
