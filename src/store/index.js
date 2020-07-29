import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import {rootReducer, sortedState, request} from './reducers/rootReducer';

const reducer = combineReducers({
    app: rootReducer,
    sorted: sortedState,
    madeRequest: request
});

const createStoreWithMiddleware
    = composeWithDevTools(applyMiddleware(
      thunk,
))(createStore);

export const configureStore = createStoreWithMiddleware(
    reducer,
);

