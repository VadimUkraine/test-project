import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';

const store =  configureStore();

const MOUNT_PLACE_ID = 'content';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(MOUNT_PLACE_ID),
);