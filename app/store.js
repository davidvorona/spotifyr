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
        currentPlaylist: "",
        activeTab: ["playlists", "list", false]
    },
    nowPlaying: {
        song: "Love Me",
        artist: "Lil Wayne",
        album: "Love Me - Single",
        image: "https://images.rapgenius.com/b13998f08c2fe9349b19c4464d786ce1.500x500x1.jpg"
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
