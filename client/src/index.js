import React from 'react';
import createHistory from 'history/createBrowserHistory';
import ReactDOM from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';

import store from './store';
import App from './containers/App';

ReactDOM.render(
    <Router history={ createHistory() }>
        <Provider store={ store }>
            <Switch>
                <Route path="/" component={ App } />
            </Switch>
        </Provider>
    </Router>,
    document.getElementById( 'root' )
);
// registerServiceWorker();
