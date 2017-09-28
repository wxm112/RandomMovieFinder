import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import movieBoardImg from './resources/movieBoardImg.png';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchPressed = this.onSearchPressed.bind(this);
  }

  state = {
    searchKeyword: ''
  }

  onSearchPressed(searchKeyword) {
    this.setState({ searchKeyword });
  }

  render() {
    return (
      <View style={styles.home}>
        <Header title={'Random Movie Finder'} />
        <View style={styles.content}>
          <Text>What Movie should we watch tonight</Text>
          <Image
            style={styles.image}
            source={movieBoardImg}
          />
        </View>
        <SearchBox onSearchPressed={this.onSearchPressed} />
        <MovieList searchKeyword={this.state.searchKeyword} />
      </View>
    );
  }
}

const styles = {
  home: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain'
  }
};

export default App;
