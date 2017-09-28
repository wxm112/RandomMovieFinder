import React from 'react';
import { View, FlatList } from 'react-native';
import moviesData from '../resources/item.json';
import MovieListItem from './MovieListItem';

class MovieList extends React.Component {
    state = {
        moviesToDisplay: moviesData.results
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchKeyword !== '') {
            const newMoviesToDisplay = moviesData.results.filter((item) =>
                this.itemContainsKeyword(item, nextProps.searchKeyword)
            );
            this.setState({ moviesToDisplay: newMoviesToDisplay });
        } else {
            this.setState({ moviesToDisplay: moviesData.results });
        }
    }

    itemContainsKeyword(item, searchKeyword) {
        const itemTitle = item.title.toLowerCase();
        const keyword = searchKeyword.toLowerCase();
        return itemTitle.indexOf(keyword) >= 0;
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.moviesToDisplay}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <MovieListItem
                            name={item.title}
                            path={item.poster_path}
                            vote={item.vote_average}
                        />
                    }
                />
            </View>
        );
    }
};

export default MovieList;
