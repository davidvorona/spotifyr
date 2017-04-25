/* eslint-disable no-unused-vars, arrow-body-style, no-underscore-dangle */
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createBrowserHistory";
import { syncHistoryWithStore } from "react-router-redux";

// import the root reducer
import rootReducer from "./reducers/rootReducer";
import sagas from "./sagas";

// create an object for the default data (currently a test object)
const defaultState = {
    communities: {
        popular: [],
        myCommunities: [],
        current: [],
        active: ["popular", "list", true]
    },
    panels: {
        overlayMenu: false,
        leftPanel: "Menu",
        rightPanel: "NowPlaying"
    },
    nowplaying: {
        song: "Love Me",
        artist: "Lil Wayne",
        album: "Love Me - Single",
        image: "https://images.rapgenius.com/b13998f08c2fe9349b19c4464d786ce1.500x500x1.jpg"
    },
    utils: {
        isLoading: false
    }
};

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, defaultState, composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

sagaMiddleware.run(sagas);

export const history = syncHistoryWithStore(createHistory(), store);

export default store;

if (module.hot) {
    module.hot.accept("./reducers/rootReducer.js", () => {
        const nextRootReducer = rootReducer.default;
        store.replaceReducer(nextRootReducer);
    });
}
