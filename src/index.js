import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/configStore'
import GlobalStyle from './GlobalStyle';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <HashRouter>
        <GlobalStyle/>
        <App />
      </HashRouter> 
    </Provider>
);

