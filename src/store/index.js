import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { routerMiddleware } from "../routing/middleware";
import history from "../routing/history";

//combine middleware or just applyMiddleware?
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const middleware = applyMiddleware(routerMiddleware(history));
const store = createStore(rootReducer, {}, middleware);

startListener(history, store);
export default store;
