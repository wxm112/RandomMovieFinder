import React, { Component } from 'react';
import {
    Text,
    View,
    Image
  } from 'react-native';
  import { connect } from 'react-redux';
  import { callMovieApi } from '../reducers/movies';
  import movieBoardImg from '../resources/movieBoardImg.png';
  import SearchBox from './SearchBox';

class Home extends Component {
    static navigationOptions = {
        title: 'Random Movie Finder'
    };

    constructor(props) {
      super(props);
      this.onSearchPressed = this.onSearchPressed.bind(this);
    }

    state = {
      searchKeyword: ''
    }
  
    onSearchPressed = (keyword) => {
      this.props.dispatchCallMovieApi(keyword);
      this.props.navigation.navigate('MovieList', {
        keyword
      });
    }
  
    render() {
      return (
        <View style={styles.home}>
          <View style={styles.content}>
            <Text>What Movie should we watch tonight</Text>
            <Image
              style={styles.image}
              source={movieBoardImg}
            />
          </View>
          <SearchBox onSearchPressed={this.onSearchPressed} />
        </View>
      );
    }
  }

  const mapDispatchToProps = dispatch => ({
    dispatchCallMovieApi: keyword => dispatch(callMovieApi(keyword))
  });
  
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

export default connect(null, mapDispatchToProps)(Home);