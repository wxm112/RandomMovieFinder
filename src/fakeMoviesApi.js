import movies from './resources/item.json';

export const IMAGE_PREFIX = 'https://image.tmdb.org/t/p/w500';

export const search = (keyword) => {
    if (keyword === 'Random') {
        return movies.results;
    }
};