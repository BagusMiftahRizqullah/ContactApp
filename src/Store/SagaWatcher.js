import {all} from 'redux-saga/effects';
import homeSaga from '../Screen/Home/Home.saga';

export function* SagaWacther() {
  yield all([homeSaga()]);
}
