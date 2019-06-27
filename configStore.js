import { applyMiddleware, createStore } from "redux";
import rootReducer from "./src/reducers/index";
import thunk from "redux-thunk";
import * as api from "./src/utils/apiRequest";

const middleWare = [thunk.withExtraArgument(api)];

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);

export default (configureStore = onComplete => {
 const store = createStoreWithMiddleware(rootReducer);
 return store;
});