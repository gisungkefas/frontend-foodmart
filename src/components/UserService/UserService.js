import axios from "axios";
import Cookies from "js-cookie";

const Base_Url = "http://localhost:8080/";

const checkout = (data) => {
  return axios.post(Base_Url + "checkout", data);
};

const token = Cookies.get("jwt");

export const apiGet = async (url) => {
  // console.log("Token: "+token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${Base_Url}${url}`, config);
  return response;
};

export const apiPost = async (url, body, auth=true) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  };
  const response = await axios.post(`${Base_Url}${url}`, body, config);
  return response;
};
