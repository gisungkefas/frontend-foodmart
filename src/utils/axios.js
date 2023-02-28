import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = process.env.REACT_APP_BASE_URL;
const token = Cookies.get("jwt")

export const apiGet = async(url) => {
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${baseUrl}/${url}`, config)
  return response
};

export const apiPost = async(url, body) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data"
    },
  };
  console.log(`${baseUrl}/${url}`)
  const response = await axios.post(`${baseUrl}/${url}`, body, config)
  console.log("postResponse",response)
  return response
};
