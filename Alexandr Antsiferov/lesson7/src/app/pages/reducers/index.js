import { combineReducers } from "redux"

import posts from './postsReduser';
import users from './usersReduser';
import comments from './commentsReduser';

export default combineReducers({
    posts,
    users,
    comments
})