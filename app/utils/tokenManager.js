import * as SecureStore from 'expo-secure-store';

const TOKEN = "token";

export default tokenManager = {
  //  To store token in the SecureStore
  storeTokenSecureStore: async (token) => {
    return await SecureStore.setItemAsync(TOKEN, token);
  },
  //  Recover token from SecureStore
  getTokenSecureStore: async () => {
    return await SecureStore.getItemAsync(TOKEN);
  },
  //  Delete token from SecureStore
  deleteTokenSecureStore: async () => {
    return await SecureStore.deleteItemAsync(TOKEN);
  },
};