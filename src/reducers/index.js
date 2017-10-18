import { combineReducers } from 'redux';
import favouritesReducer from './favourite';
import moviesReducer from './movies';

export default combineReducers({
    favourites: favouritesReducer,
    movies: moviesReducer
});