/* eslint-disable no-unused-vars, arrow-body-style, no-underscore-dangle */
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createBrowserHistory";
import { syncHistoryWithStore } from "react-router-redux";

// import the root reducer
import rootReducer from "./reducers/rootReducer";
import sagas from "./sagas";
import BaseComponent from "./Main/components/BaseComponent";

// create an object for the default app state
const defaultState = {
    user: {
        spotifyName: "",
        spotifyId: "",
        imageUrl: ""
    },
    panels: {
        overlayMenu: false,
        leftPanel: "Menu",
        rightPanel: "NowPlaying"
    },
    communities: {
        popular: [],
        myCommunities: [],
        current: [],
        activeTab: ["popular", "list", true]
    },
    music: {
        songs: [],
        playlists: [],
        queue: [],
        currentPlaylist: [],
        activeTab: ["songs", "list", false]
    },
    nowPlaying: {
        currentSong: []
    },
    utils: {
        isLoading: false,
        isConnected: false,
        modalTitle: "",
        modalContent: BaseComponent
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
