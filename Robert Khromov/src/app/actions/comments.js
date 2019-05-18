import axios from "axios";
import store from "../store"

export function getComments() {
    return store.dispatch({
        type: "GET_COMMENTS",
        payload: axios.get("https://jsonplaceholder.typicode.com/comments").then(
            response => response.data
        )
    });
}

export function removeComment(id) {
    return store.dispatch({type: "DELETE_COMMENT", payload: id})
}


export function addComment(newComment) {
    return store.dispatch({type: "ADD_COMMENT", payload: newComment})
}