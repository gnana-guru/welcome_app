import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppNavigation from './src/router';

const App = () => {
  return <AppNavigation />;
};
const reduxApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default reduxApp;
