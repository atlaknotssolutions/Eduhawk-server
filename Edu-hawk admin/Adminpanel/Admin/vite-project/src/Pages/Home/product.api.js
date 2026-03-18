import axios from "axios";

const API_URL = "https://eduhawk-server-urpn.onrender.com/api/create";

export const createProductApi = (formData) => {
  return axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
