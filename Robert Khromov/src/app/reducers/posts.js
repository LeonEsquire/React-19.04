let initPostsState = {
    posts: [],
    fetching: false,
    error: null,
};

export default function reducer(state = initPostsState, action) {

    switch (action.type) {
        case "GET_POSTS": {
            return {...state, fetching: true}
        }
        case "GET_POSTS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "GET_POSTS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                posts: action.payload,
            }
        }
        case "ADD_POST": {
            return {
                ...state,
                posts: [...state.posts, action.payload],
            }
        }
        case "DELETE_POST": {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload),
            }
        }
    }

    return state
}