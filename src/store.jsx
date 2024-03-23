import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import footballMatchesReducer from './reducers';

const rootReducer = combineReducers({
  footballMatches: footballMatchesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));