import React from "react";
import ReactDOM from "react-dom";
import App from './src/App'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);