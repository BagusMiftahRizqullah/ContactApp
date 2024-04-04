import {createStore, applyMiddleware} from 'redux';
import {combinedReducers} from './AllReducer';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import Storage from '@react-native-async-storage/async-storage';
import createSaga from 'redux-saga';
import {SagaWacther} from './SagaWatcher';

const persistConfig = {
  key: 'weather',
  storage: Storage,
};

const sagaMiddleWare = createSaga();

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const Store = createStore(
  persistedReducer,
  applyMiddleware(logger, sagaMiddleWare),
);

export const Persistor = persistStore(Store);

sagaMiddleWare.run(SagaWacther);
