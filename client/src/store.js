import { createStore, combineReducers } from 'redux';
import { home, users } from './reducers';

const reducers = combineReducers({
    home,
    users,
});

const store = createStore( reducers );

export default store;
