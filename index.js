import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './src/App';

WebFont.load({
  google: {
    families: ['Roboto:400,700', 'sans-serif'],
  },
});

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
