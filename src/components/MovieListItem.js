import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { IMAGE_PREFIX } from '../fakeMoviesApi';

const MovieListItem = ({ movie, callback }) => {
    const { titleStyle, containerStyle, imageStyle, voteStyle, textContainerStyle } = styles;
    return (
        <TouchableOpacity onPress={() => { callback(movie); }}>
            <View style={containerStyle}>
                <Image source={{ uri: `${IMAGE_PREFIX}${movie.poster_path}` }} style={imageStyle} />
                <View style={textContainerStyle}>
                    <Text style={titleStyle}>{movie.title}</Text>
                    <Text style={voteStyle}>{`${movie.vote_average}/10`}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    titleStyle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    voteStyle: {
        fontSize: 12,
        paddingTop: 3
    },
    imageStyle: {
        flex: 0.15,
        height: 40,
        width: 30,
        resizeMode: 'contain'
    },
    containerStyle: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 30,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    textContainerStyle: {
        flex: 0.8,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
};

export default MovieListItem;