import axios from "axios";
import store from "../store"

export function getUsers() {
    return store.dispatch({
        type: "GET_USERS",
        payload: axios.get("https://jsonplaceholder.typicode.com/users").then(
            response => response.data
        )
    });
}

export function removeUser(id) {
    return store.dispatch({type: "DELETE_USER", payload: id})
}

export function addNewUser(user) {
    return store.dispatch({type: "ADD_USER", payload: user})
}