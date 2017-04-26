import { combineReducers } from "redux";

// import separate reducers here
import { routerReducer } from "react-router-redux";
import communities from "./communities";
import panels from "./panels";
import nowPlaying from "./nowPlaying";

// root reducer object
const rootReducer = combineReducers({ panels, communities, nowPlaying, routing: routerReducer });

export default rootReducer;
