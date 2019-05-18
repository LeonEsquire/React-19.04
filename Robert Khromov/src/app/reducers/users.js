let initUsersState = {
    users: [],
    fetching: false,
    error: null,
};

export default function reducer(state = initUsersState, action) {

    switch (action.type) {
        case "GET_USERS": {
            return {...state, fetching: true}
        }
        case "GET_USERS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "GET_USERS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                users: action.payload,
            }
        }
        case "DELETE_USER": {
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
            }
        }

        case "ADD_USER": {
            return {
                ...state,
                users: [...state.users, action.payload],
            }
        }
    }

    return state
}