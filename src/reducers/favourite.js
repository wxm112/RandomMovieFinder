export const addFavourite = movie => ({
    type: 'ADD_FAVOURITE',
    movie,
});

export const removeFavourite = movie => ({
    type: 'REMOVE_FAVOURITE',
    movie,
});

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAVOURITE':
            return [...state, action.movie];
        case 'REMOVE_FAVOURITE':
            return [...state.filter(movie => movie.id !== action.movie.id)];
        default:
            return state;
    }
};