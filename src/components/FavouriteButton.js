import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Image } from 'react-native';
import favoritesIcon from '../resources/favourites.png';
import favoritesSelectedIcon from '../resources/favorites_selected.png';
import { addFavourite, removeFavourite } from '../reducers/favourite';

const FavouriteButton = (props) => {
    return (
        <TouchableOpacity
            onPress={() => {
                const { movie, favourites, dispatchRemoveFavourite, dispatchAddFavourite } = props;
                console.log(movie);
                const isSelected = favourites.includes(movie);
                if (isSelected) {
                    dispatchRemoveFavourite(movie);
                } else {
                    dispatchAddFavourite(movie);
                }
            }}
        >
            <Image
                source={getImage(props)}
            />
        </TouchableOpacity>
    );
};

const getImage = (props) => {
    const { movie, favourites } = props;
    const isSelected = favourites.includes(movie);
    if (isSelected) {
        return favoritesSelectedIcon;
    }
    return favoritesIcon;
};

const mapStateToProps = state => ({
    favourites: state.favourites
});

const mapDispatchToProps = dispatch => ({
    dispatchAddFavourite: movie => dispatch(addFavourite(movie)),
    dispatchRemoveFavourite: movie => dispatch(removeFavourite(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteButton);