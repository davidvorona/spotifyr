import { combineReducers } from "redux";

// import separate reducers here
import { routerReducer } from "react-router-redux";
import communities from "./communities";
import panels from "./panels";
import nowPlaying from "./nowPlaying";
import music from "./music";
import utils from "./utils";


// root reducer object
const rootReducer = combineReducers({ panels, communities, nowPlaying, music, utils, routing: routerReducer });

export default rootReducer;
