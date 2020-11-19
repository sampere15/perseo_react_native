import axios from "axios";
import tokenManager from "./tokenManager";
import { Endpoints } from "./global";

const API = "https://dev.perseo.tv/ws";

const instance = axios.create({
  baseURL: API,
});

const axiosClient = {
  login: (formData) => {
    formData.append("device", "Android");

    return axios.post(`${API}${Endpoints.LOGIN}`, formData);
  },

  post: async (endpoint, formData) => {
    const token = await tokenManager.getTokenSecureStore();
    formData.append("token", token);
    formData.append("device", "Android");

    return instance.post(`${API}${endpoint}`, formData);
  },
};

export default axiosClient;
