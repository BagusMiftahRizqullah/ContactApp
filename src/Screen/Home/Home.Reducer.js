import {HOME_ACTION} from './Home.Action';

const initialState = {
  isLoading: false,
  DataContact: [],
  DataDetails: {},
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_ACTION.SUCCESS_GET_HOME:
      return {
        ...state,
        DataContact: action.payload,
      };
    case HOME_ACTION.SUCCESS_GET_BYID:
      return {
        ...state,
        DataDetails: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
