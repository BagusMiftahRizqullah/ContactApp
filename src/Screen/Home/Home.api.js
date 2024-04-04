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
  console.log('DATA POST', data);
  const datas = {
    firstName: data.payload.firstName,
    lastName: data.payload.lastName,
    age: data.payload.age,
    photo: data.payload.photo,
  };
  const options = {
    method: 'POST',
    url: `${baseApiURL}/contact`,
    data: datas,
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

export const apiDellDataHome = id => {
  console.log('URL DELL', `${baseApiURL}/contact/${id}`);
  const options = {
    method: 'DELETE',
    url: `${baseApiURL}/contact/${id}`,
  };

  return axios.request(options);
};
