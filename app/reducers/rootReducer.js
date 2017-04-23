import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// import separate reducers here
import community from "./community";

const rootReducer = combineReducers({ community, routing: routerReducer });

export default rootReducer;
