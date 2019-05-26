import axios from 'axios'

export function fetchUser(id) {
  return {
    type: "FETCH_USER",
    payload: axios.get(`http://jsonplaceholder.typicode.com/users/${id}`).then(response => response.data)
  }
}

export function resetUser() {
  return {
    type: "RESET_USER"
  }
}