import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import StoreContext from './src/data-access';
import App from './src/App';

WebFont.load({
  google: {
    families: ['Roboto:400,700', 'sans-serif'],
  },
});

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
