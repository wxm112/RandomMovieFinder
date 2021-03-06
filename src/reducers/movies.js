import * as moviesApi from '../moviesApi';

const CALL_MOVIE_IN_PROGRESS = 'CALL_MOVIE_IN_PROGRESS';
const CALL_MOVIE_SUCCESS = 'CALL_MOVIE_SUCCESS';
const CALL_MOVIE_FAIL = 'CALL_MOVIE_FAIL';

const initialState = {
    movies: null,
    isLoading: false,
    error: null
};

export const callMovieApi = keyword => (dispatch) => {
    dispatch({ type: CALL_MOVIE_IN_PROGRESS });
    return moviesApi.search(keyword)
    .then(movies => dispatch({ type: CALL_MOVIE_SUCCESS, movies }))
    .catch(error => dispatch({ type: CALL_MOVIE_FAIL, error }));
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CALL_MOVIE_IN_PROGRESS:
            return { ...state, ...initialState, isLoading: true };
        case CALL_MOVIE_FAIL:
            return { ...state, ...initialState, error: action.error };
        case CALL_MOVIE_SUCCESS:
            return { ...state, ...initialState, movies: action.movies };
        default:
            return state;
    }
};