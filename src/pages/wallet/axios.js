import axios from "axios";


const baseUrl = "http://localhost:8080/";

export const apiPostAuthorization = (path, data) => {
    const config = {
        headers: {
            Authorization: `${localStorage.getItem("signature")}`
        }
    }
  return axios.post(`${baseUrl}${path}`, data, config);
};