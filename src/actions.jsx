// actions.js
import axios from 'axios';

export const FETCH_FOOTBALL_MATCHES_REQUEST = 'FETCH_FOOTBALL_MATCHES_REQUEST';
export const FETCH_FOOTBALL_MATCHES_SUCCESS = 'FETCH_FOOTBALL_MATCHES_SUCCESS';
export const FETCH_FOOTBALL_MATCHES_FAILURE = 'FETCH_FOOTBALL_MATCHES_FAILURE';

export const fetchFootballMatchesRequest = () => ({
  type: FETCH_FOOTBALL_MATCHES_REQUEST,
});

export const fetchFootballMatchesSuccess = (matches) => ({
  type: FETCH_FOOTBALL_MATCHES_SUCCESS,
  payload: matches,
});

export const fetchFootballMatchesFailure = () => ({
  type: FETCH_FOOTBALL_MATCHES_FAILURE,
});

// actions.js
export const fetchFootballMatches = () => {
    return (dispatch) => {
      dispatch(fetchFootballMatchesRequest());
      axios.get('https://jsonmock.hackerrank.com/api/football_matches?page=2')
        .then(response => {
          const matches = response.data.data;
          console.log('API Response:', matches); // Log API response
          dispatch(fetchFootballMatchesSuccess(matches));
        })
        .catch(error => {
          console.error('API Error:', error); // Log API error
          dispatch(fetchFootballMatchesFailure());
        });
    };
  };
  