import { combineReducers } from "redux";

import {authReducer,postReducer} from "./AuthReducer";

export const reducers=combineReducers({authReducer,postReducer})