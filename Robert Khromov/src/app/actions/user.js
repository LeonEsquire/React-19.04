import dispatcher from "../dispatcher";
import {GET_USERS} from "../constants/user";
import axios from "axios";

export function getUsers() {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            dispatcher.dispatch({
                type: GET_USERS,
                data: response.data
            });
        });
}