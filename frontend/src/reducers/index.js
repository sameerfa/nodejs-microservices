import { combineReducers } from "redux";

import users from "./users";
import auth from "./auth";

export const reducers = combineReducers({ users, auth });
