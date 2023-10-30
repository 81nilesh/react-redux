import { createStore } from "redux";


import rootReducer from "./reducers";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOL_EXTENSION__());

export default store;