import React from 'react';
import { StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {FIREBASE_CONFIG} from './firebase/firebase_config';
import * as firebase from 'firebase';
//import {Drawer} from './components/Drawer/Drawer'

import {StartNavigator} from './components/NavigationBar/StartNavigator';

firebase.initializeApp(FIREBASE_CONFIG);

class App extends React.Component {
  render() {
      return (
        <Provider store={store}>
          <View style={{flex: 1}}>
              <StartNavigator/>
          </View>
        </Provider>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;