import Axios from 'axios';
import * as types from './actionTypes';

// Axios.defaults.baseURL = "http://localhost:4000/api";

export const getPosts = () => dispatch => {
    Axios.get("http://localhost:4000/api/posts")
        .then(res => {
            // console.log(res);
            dispatch({
                type: types.GET_ALL_POSTS_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => 
            dispatch({
                type: types.GET_ALL_POSTS_SUCCESS,
                payload: err.message
            })
        );
};