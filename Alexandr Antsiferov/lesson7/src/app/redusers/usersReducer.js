export default function reducer(
  state = {
    users: []
  },
  action) {
  switch (action.type) {
    case "FETCH_USERS_FULFILLED": {
      return { ...state, users: action.payload };
    }
  }
  return state;
}
