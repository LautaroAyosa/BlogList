import { configureStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import blogReducer from './redux/blogReducer/blogReducer'


// Redux devtools
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = compose;

// Add all reducers here so that they are combined
const rootReducer = combineReducers({
  blogReducer,
});

export const store = configureStore (
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);