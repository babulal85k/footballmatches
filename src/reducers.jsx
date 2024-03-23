// reducers.js
import {
    FETCH_FOOTBALL_MATCHES_REQUEST,
    FETCH_FOOTBALL_MATCHES_SUCCESS,
    FETCH_FOOTBALL_MATCHES_FAILURE
  } from './actions';
  
  const initialState = {
    isLoading: false,
    isError: false,
    footballMatches: [],
  };
  
  const footballMatchesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_FOOTBALL_MATCHES_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case FETCH_FOOTBALL_MATCHES_SUCCESS:
        return {
          ...state,
          isLoading: false,
          footballMatches: action.payload,
        };
      case FETCH_FOOTBALL_MATCHES_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        return state;
    }
  };
  
  export default footballMatchesReducer;
  