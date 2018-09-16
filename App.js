import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './components/Router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBiFGEs69-NvDNfVbZY2YpTPtv-dvKayGI",
      authDomain: "reactnative-auth-e453f.firebaseapp.com",
      databaseURL: "https://reactnative-auth-e453f.firebaseio.com",
      projectId: "reactnative-auth-e453f",
      storageBucket: "reactnative-auth-e453f.appspot.com",
      messagingSenderId: "491177441040"
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
