import React from 'react';
import MainApp from './app/routes';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import store from './app/redux/store';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
