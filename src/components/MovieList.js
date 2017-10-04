import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import MovieListItem from './MovieListItem';

const renderSearchWord = (searchKeyword) => {
    if (searchKeyword !== '') {
        return `Search for ${searchKeyword}`;
    }
};


class MovieList extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: renderSearchWord(navigation.state.params.searchKeyword)
    });

    state = {
        moviesToDisplay: this.props.navigation.state.params.movies
    }

    itemContainsKeyword(item, searchKeyword) {
        const itemTitle = item.title.toLowerCase();
        const keyword = searchKeyword.toLowerCase();
        return itemTitle.indexOf(keyword) >= 0;
    }

    movieSlected = (movie) => {
        this.props.navigation.navigate('MovieDetail', { movie });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.moviesToDisplay}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <MovieListItem
                            movie={item}
                            callback={this.movieSlected}
                        />
                    }
                />
            </View>
        );
    }
}

export default MovieList;