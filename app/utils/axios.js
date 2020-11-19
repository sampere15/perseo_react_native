import axios from "axios";
import tokenManager from "./tokenManager";

const API = "https://dev.perseo.tv/ws";

const instance = axios.create({
  baseURL: API,
});

const axiosClient = {
  //  Our own axios configured
  post: (url, data) => {
    return instance.post(API + url, data);
  },
  getMediaInfo: async (formData) => {
    const token = await tokenManager.getTokenSecureStore();
    formData.append("token", token);
    formData.append("device", "Android");

    return instance.post(`${API}/Play.php`, formData);
  },
};

export default axiosClient;
