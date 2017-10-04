import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import { IMAGE_PREFIX } from '../fakeMoviesApi';

class MovieDetail extends Component {
    static navigationOptions = () => ({
        title: 'Movie'
    });

    render() {
        const { navigation } = this.props;
        const { movie } = navigation.state.params;

        return (
            <View>
                <Text>{movie.title}</Text>
            </View>
        );
    }
}

export default MovieDetail;