import axios from 'axios';
import Config from 'react-native-config';
import {baseApiURL} from '../../Config';

export const apiGetDataWeatherCountry = data => {
  return axios({
    method: 'GET',
    url:
      baseApiURL +
      `?lat=${data.payload.lat}&lon=${data.payload.lng}&APPID=${Config.KEY_API}`,
  });
};

export const apiSearchWeatherCountry = data => {
  return axios({
    method: 'GET',
    url: `${baseApiURL}?q=${data.payload.search},uk&APPID=${Config.KEY_API}`,
  });
};
