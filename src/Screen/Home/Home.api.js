import axios from 'axios';
import Config from 'react-native-config';
import {baseApiURL} from '../../Config';

export const apiGetDataHome = data => {
  const options = {
    method: 'GET',
    url: `${baseApiURL}/contact`,
  };

  return axios.request(options);
};

export const apiGetByIdDataHome = data => {
  const options = {
    method: 'GET',
    url: `${baseApiURL}/contact/${data.payload.id}`,
  };

  return axios.request(options);
};
export const apiPostDataHome = data => {
  const options = {
    method: 'DELETE',
    url: `${baseApiURL}/contact`,
    data: data.payload,
  };

  return axios.request(options);
};

export const apiUpdateDataHome = data => {
  const options = {
    method: 'PUT',
    url: `${baseApiURL}/contact/${data.payload.id}`,
    data: data.payload,
  };

  return axios.request(options);
};

export const apiDellDataHome = data => {
  const options = {
    method: 'DELETE',
    url: `${baseApiURL}/contact/${data.payload.id}`,
  };

  return axios.request(options);
};
