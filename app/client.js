import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import "babel-polyfill";
require('./fonts/Roboto/styles.css');

const rootEl = document.getElementById('root');
render(
    <Router
		routes={routes}
		history={hashHistory}
		key={process.env.NODE_ENV !== "production" ? Math.random() : false}
		/>, rootEl
);

if (module.hot) {
    module.hot.accept();
}
