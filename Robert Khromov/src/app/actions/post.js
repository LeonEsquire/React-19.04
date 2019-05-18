import axios from "axios";
import store from "../store"

export function getPosts() {
    return store.dispatch({
        type: "GET_POSTS",
        payload: axios.get("http://jsonplaceholder.typicode.com/posts/").then(
            response => response.data
        )
    });
}

export function removePosts(id) {
    return store.dispatch({type: "DELETE_POST", payload: id})
}

export function addPost(newPost) {
    return store.dispatch({type: "ADD_POST", payload: newPost})
}