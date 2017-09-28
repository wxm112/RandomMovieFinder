import React from 'react';
import { View, Text, Image } from 'react-native';

const MovieListItem = ({ name, path, vote }) => {
    const { titleStyle, containerStyle, imageStyle, voteStyle, textContainerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${path}` }} style={imageStyle} />
            <View style={textContainerStyle}>
                <Text style={titleStyle}>{name}</Text>
                <Text style={voteStyle}>{vote}</Text>
            </View>
        </View>
    );
};

const styles = {
    titleStyle: {
        fontSize: 15
    },
    voteStyle: {
        fontSize: 8,
        paddingTop: 3
    },
    imageStyle: {
        flex: 0.2,
        height: 30,
        width: 20,
        resizeMode: 'contain'
    },
    containerStyle: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10
    },
    textContainerStyle: {
        flex: 0.8,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
};

export default MovieListItem;
