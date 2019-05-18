let initCommentsState = {
    comments: [],
    fetching: false,
    error: null,
};

export default function reducer(state = initCommentsState, action) {
    switch (action.type) {
        case "GET_COMMENTS": {
            return {...state, fetching: true}
        }
        case "GET_COMMENTS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "GET_COMMENTS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                comments: action.payload,
            }
        }
        case "DELETE_COMMENT": {
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.payload),
            }
        }
        case "ADD_COMMENT": {
            return {
                ...state,
                comments: [...state.comments, action.payload],
            }
        }
    }
    return state
}