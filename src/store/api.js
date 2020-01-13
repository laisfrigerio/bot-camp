import axios from "axios";

export const get = (endpoint) => {
  return axios.get(endpoint);
};

export const post = (endpoint, data) => {
  return axios.post(endpoint, data);
};

export const put = (endpoint, data) => {
  return axios.post(endpoint, data);
};

export const destroy = (endpoint) => {
  return axios.post(endpoint);
};

