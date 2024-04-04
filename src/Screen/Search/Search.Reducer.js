import {SEARCH_ACTION} from './Search.Action';

const initialState = {
  isLoading: false,
  data_contry: [],
  myLocation: {
    lat: 0,
    long: 0,
  },
  data_mylocation: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ACTION.SUCCESS_SEARCH_DATA_COUNTRY:
      return {
        ...state,
        data_contry: action.payload,
      };

    case SEARCH_ACTION.SET_MY_LOCATION:
      return {
        ...state,
        myLocation: {
          lat: action.payload.lat,
          long: action.payload.lng,
        },
      };

    case SEARCH_ACTION.SUCCESS_GET_MYLOCATION:
      return {
        ...state,
        data_mylocation: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
