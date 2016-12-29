import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './modules';
import Home from './modules/Pages/Home';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
	</Route>
);
