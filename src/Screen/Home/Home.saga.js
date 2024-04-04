import {takeLatest, put} from 'redux-saga/effects';
import {apiGetDataHome, apiDellDataHome} from './Home.api';
import {HOME_ACTION} from './Home.Action';
import {actionLoading} from '../../Store/GlobalAction';

function* apiGetDataContactSaga(action) {
  yield put({type: 'SET_LOADING', payload: true});
  try {
    const res = yield apiGetDataHome(action.payload);

    if (res.status == 200) {
      yield put({type: HOME_ACTION.SUCCESS_GET_HOME, payload: res.data.data});
      yield put({type: 'SET_LOADING', payload: false});
    } else {
      console.log('GAGAL FETCH');
      yield put({type: 'SET_LOADING', payload: false});
    }
  } catch (err) {
    console.log('GAGAL FETCH');
    yield put({type: 'SET_LOADING', payload: false});
  }
}

function* apiDellDataContactSaga(action) {
  yield put({type: 'SET_LOADING', payload: true});
  try {
    const res = yield apiDellDataHome(action.payload);

    if (res.status == 200) {
      yield put({type: 'SET_LOADING', payload: false});
    } else {
      console.log('GAGAL DELETE');
      yield put({type: 'SET_LOADING', payload: false});
    }
  } catch (err) {
    console.log('GAGAL DELETE');
    yield put({type: 'SET_LOADING', payload: false});
  }
}

export default function* homeSaga() {
  yield takeLatest(HOME_ACTION.GET_DATA_HOME, apiGetDataContactSaga);
  yield takeLatest(HOME_ACTION.DELL_DATA, apiDellDataContactSaga);
}
