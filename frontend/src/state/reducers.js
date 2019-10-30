import * as types from './actionTypes';

const initialState = {
    posts: [],
    isFetching: false,
    error: ""
};

export function postReducer(state = initialState, action) {
    switch(action.type) {
        case types.GET_ALL_POSTS: 
            return {
                ...state,
            }
        case types.GET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                isFetching: false,
                error: ""
            }
        case types.GET_ALL_POSTS_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}