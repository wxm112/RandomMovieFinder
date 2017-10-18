import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import AppNavigation from './components/AppNavigation';

const store = createStore(reducer, {}, applyMiddleware(thunk));
const App = () => (
    <Provider store={store}>
        <AppNavigation />
    </Provider>
);

export default App;

