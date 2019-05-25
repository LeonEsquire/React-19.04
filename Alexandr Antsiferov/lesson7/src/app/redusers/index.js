import { combineReducers } from "redux"

import users from './usersReducer';
import user from './userReduser'

export default combineReducers({
    users,
    user
})