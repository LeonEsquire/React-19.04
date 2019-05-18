import {combineReducers} from "redux"

import posts from "./posts"
import users from "./users"
import comments from "./commets"

export default combineReducers({
    posts: posts,
    users: users,
    comments: comments,
})