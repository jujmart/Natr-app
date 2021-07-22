import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import commentsReducer from "./comments";
import individualPhotoReducer from "./individualPhoto";
import modalReducer from "./modal";
import photosReducer from "./photos";
import sessionReducer from "./session";

const rootReducer = combineReducers({
	session: sessionReducer,
	photos: photosReducer,
	individualPhoto: individualPhotoReducer,
	modal: modalReducer,
	comments: commentsReducer,
});

let enhancer;
if (process.env.NODE_ENV === "production") {
	enhancer = applyMiddleware(thunk);
} else {
	const logger = require("redux-logger").default;
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
	return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
