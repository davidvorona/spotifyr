import { createStore } from "redux";
import createHistory from "history/createBrowserHistory";
import { syncHistoryWithStore } from "react-router-redux";

// import the root reducer
import rootReducer from "./reducers/rootReducer";

// supply data from api...how? async funcs in store?

// create an object for the default data (currently a test object)
const defaultState = {
    communities: {
        popular: ["Rap", "Techno", "Dope", "BitchWhoGuessedIt"],
        myCommunities: ["Chillin", "ForTheBoys", "Bird Up"],
        current: ["MyCurrentCommunity", "CurrentSong", "CurrentArtist", 13],
        active: "popular"
    },
    panels: {
        leftPanel: "Communities",
        rightPanel: "NowPlaying"
    },
    nowplaying: {
        song: "Love Me",
        artist: "Lil Wayne",
        album: "Love Me - Single"
    }
};

const store = createStore(rootReducer, defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const history = syncHistoryWithStore(createHistory(), store);

if (module.hot) {
    module.hot.accept("./reducers/rootReducer.js", () => {
        const nextRootReducer = rootReducer.default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
