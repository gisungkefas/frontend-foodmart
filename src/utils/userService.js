import axios from "axios";

const baseUrl = "http://localhost:8080/";

const create = (data) => {
  return axios.post(baseUrl + "api/v1/auth/register", data);
};

const verify = (data) => {
  return axios.put(baseUrl + "api/v1/auth/confirmRegistration", data);
};

export {create, verify};
