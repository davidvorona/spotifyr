import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import separate reducers here
import communities from "./communities";
import panels from "./panels";
import nowplaying from "./nowplaying";

const rootReducer = combineReducers({ panels, communities, nowplaying, routing: routerReducer });

export default rootReducer;
