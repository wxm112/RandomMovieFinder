import { StackNavigator } from 'react-navigation';
import Home from './Home';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

const AppNavigation = StackNavigator({
  Home: { screen: Home },
  MovieList: { screen: MovieList },
  MovieDetail: { screen: MovieDetail }
});

export default AppNavigation;