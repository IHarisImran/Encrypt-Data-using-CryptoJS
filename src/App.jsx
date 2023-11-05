import CryptoJS from "crypto-js";

export default function App() {
  const data = "This is the secret data that only I and the Government of United States know! 🤫",
    secretKey = "@Qwerty123",
    encrypted = CryptoJS.AES.encrypt(data, secretKey),
    decrypted = CryptoJS.AES.decrypt("U2FsdGVkX1/S1230jC8MXGohDK4aFeOUpt7BDppGyAo2C0S8GUQPlVWCczdxDYxGokcfJpb7tRMhkSMekfubvBGCly4LetZ7fQIYGW+bpm8LCDxJXGkPXWOySYq0X62f", secretKey),
    formatted = decrypted.toString(CryptoJS.enc.Utf8);

  console.log(`Origional: ${data}`);
  console.log(`Decrypted: ${formatted}`);
  
  return <></>;
}