import {takeLatest, put} from 'redux-saga/effects';
import {apiGetDataWeatherCountry, apiSearchWeatherCountry} from './Search.api';
import {SEARCH_ACTION} from './Search.Action';

function* apiDataCountrySaga(action) {
  const res = yield apiGetDataWeatherCountry(action);
  try {
    if (res.status == 200) {
      yield put({
        type: SEARCH_ACTION.SUCCESS_GET_MYLOCATION,
        payload: res.data,
      });
    } else {
      console.log('GAGAL FETCH');
    }
  } catch (err) {
    // yield put({type: AUTH_CONSTANT.LOGIN_FAILURE, payload: err});
  }
}

function* apiSearchCountrySaga(action) {
  const res = yield apiSearchWeatherCountry(action);
  try {
    if (res.status == 200) {
      yield put({
        type: SEARCH_ACTION.SUCCESS_SEARCH_DATA_COUNTRY,
        payload: res.data,
      });
    } else {
      console.log('GAGAL FETCH');
    }
  } catch (err) {
    // yield put({type: AUTH_CONSTANT.LOGIN_FAILURE, payload: err});
  }
}

export default function* searchSaga() {
  yield takeLatest(SEARCH_ACTION.GET_MY_LOCATION, apiDataCountrySaga);
  yield takeLatest(SEARCH_ACTION.SEARCH_DATA_COUNTRY, apiSearchCountrySaga);
}
