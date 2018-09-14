import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
