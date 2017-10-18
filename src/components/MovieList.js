import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';

const renderSearchWord = (searchKeyword) => {
    if (searchKeyword !== '') {
        return `Search for ${searchKeyword}`;
    }
};


class MovieList extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: renderSearchWord(navigation.state.params.keyword)
    });

    itemContainsKeyword(item, searchKeyword) {
        const itemTitle = item.title.toLowerCase();
        const keyword = searchKeyword.toLowerCase();
        return itemTitle.indexOf(keyword) >= 0;
    }

    movieSlected = (movie) => {
        this.props.navigation.navigate('MovieDetail', { movie });
    }

    render() {
        const { error, isLoading, moviesToDisplay } = this.props;
        if (isLoading) {
            return <ActivityIndicator color={'red'} style={{ flex: 1 }} />;
        }
        if (error) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Something went wrong</Text>
                </View>
            );
        }
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={moviesToDisplay}
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

const mapStateToProps = state => ({
    moviesToDisplay: state.movies.movies,
    error: state.movies.error,
    isLoading: state.movies.isLoading
});

export default connect(mapStateToProps)(MovieList);