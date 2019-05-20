import dispatcher from "../dispatcher";
import { GET_USERS, GET_POSTS } from "../constants/constants";
import axios from "axios";

export function getUsers() {
  axios.get("http://jsonplaceholder.typicode.com/users/").then(response => {
    dispatcher.dispatch({
      type: GET_USERS,
      data: response.data
    })
  });
}

export function getPosts() {
  axios.get("http://jsonplaceholder.typicode.com/posts/").then(response => {
    dispatcher.dispatch({
      type: GET_POSTS,
      data: response.data
    });
  });
}
