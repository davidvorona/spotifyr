import { createStore } from "redux";
import createHistory from "history/createBrowserHistory";
import { syncHistoryWithStore } from "react-router-redux";

// import the root reducer
import rootReducer from "./reducers/rootReducer";

// supply data from api...how? async funcs in store?

// create an object for the default data (currently a test object)
const defaultState = { community: ["David", "Bob", "Joe", "Cindy"] };

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(createHistory(), store);

if (module.hot) {
    module.hot.accept("./reducers/rootReducer.js", () => {
        const nextRootReducer = rootReducer.default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
