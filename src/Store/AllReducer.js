import {combineReducers} from 'redux';
import homeReducer from '../Screen/Home/Home.Reducer';
import GlobalReducer from './GlobalReducer';

export const combinedReducers = combineReducers({
  homeReducer: homeReducer,
  GlobalReducer: GlobalReducer,
});
