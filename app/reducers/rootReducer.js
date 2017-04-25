import { combineReducers } from "redux";

// import separate reducers here
import { routerReducer } from "react-router-redux";
import communities from "./communities";
import panels from "./panels";
import nowplaying from "./nowplaying";

// root reducer object
const rootReducer = combineReducers({ panels, communities, nowplaying, routing: routerReducer });

export default rootReducer;
