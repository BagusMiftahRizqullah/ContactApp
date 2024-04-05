import {takeLatest, put} from 'redux-saga/effects';
import {
  apiGetDataHome,
  apiDellDataHome,
  apiPostDataHome,
  apiGetByIdDataHome,
  apiUpdateDataHome,
} from './Home.api';
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
  console.log('GODellete');
  yield put({type: 'SET_LOADING', payload: true});
  try {
    const res = yield apiDellDataHome(action.payload);
    console.log('dELLres', res);
    if (res.status == 200) {
      yield put({type: 'SET_LOADING', payload: false});
    } else {
      console.log('GAGAL DELETE');
      yield put({type: 'SET_LOADING', payload: false});
    }
  } catch (err) {
    console.log('ERR GAGAL DELETE');
    yield put({type: 'SET_LOADING', payload: false});
  }
}

function* apiAddDataContactSaga(action) {
  console.log('GOADD');
  yield put({type: 'SET_LOADING', payload: true});
  try {
    const res = yield apiPostDataHome(action.payload);
    console.log('AddData', res);
    if (res.status == 200) {
      yield put({type: 'SET_LOADING', payload: false});
    } else {
      console.log('GAGAL AddData');
      yield put({type: 'SET_LOADING', payload: false});
    }
  } catch (err) {
    console.log('ERR GAGAL AddData');
    yield put({type: 'SET_LOADING', payload: false});
  }
}

function* apiGetByIdDataContactSaga(action) {
  console.log('goBYID', action);
  yield put({type: 'SET_LOADING', payload: true});
  try {
    const res = yield apiGetByIdDataHome(action.payload);

    if (res.status == 200) {
      yield put({type: HOME_ACTION.SUCCESS_GET_BYID, payload: res.data.data});
      yield put({type: 'SET_LOADING', payload: false});
    } else {
      console.log('GAGAL BY ID FETCH');
      yield put({type: 'SET_LOADING', payload: false});
    }
  } catch (err) {
    console.log('GAGAL BY ID FETCH');
    yield put({type: 'SET_LOADING', payload: false});
  }
}

function* apiEditDataContactSaga(action) {
  console.log('goBYID', action);
  yield put({type: 'SET_LOADING', payload: true});
  try {
    const res = yield apiUpdateDataHome(action.payload);

    if (res.status == 200) {
      yield put({type: HOME_ACTION.SUCCESS_EDIT_DATA, payload: res.data.data});
      yield put({type: 'SET_LOADING', payload: false});
    } else {
      console.log('GAGAL EDIT DATA FETCH');
      yield put({type: 'SET_LOADING', payload: false});
    }
  } catch (err) {
    console.log('GAGAL EDIT DATA FETCH');
    yield put({type: 'SET_LOADING', payload: false});
  }
}

export default function* homeSaga() {
  yield takeLatest(HOME_ACTION.GET_DATA_HOME, apiGetDataContactSaga);
  yield takeLatest(HOME_ACTION.DELL_DATA, apiDellDataContactSaga);
  yield takeLatest(HOME_ACTION.ADD_DATA, apiAddDataContactSaga);
  yield takeLatest(HOME_ACTION.GET_DATA_BYID, apiGetByIdDataContactSaga);
  yield takeLatest(HOME_ACTION.EDIT_DATA, apiEditDataContactSaga);
}
