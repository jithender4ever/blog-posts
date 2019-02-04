import configureCall from "../api";
import _ from 'lodash';

export const getPosts = () => {
    return async dispatch => {
        const response = await configureCall.get('/posts');

        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data});
    }
};

export const getUser = (userId) => {
    return async function(dispatch) {
        const response = await configureCall.get(`/users/${userId}`);

        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        })
    }
};

export const getPostsAndUsers = () => {
  return async function(dispatch, getState) {
      await dispatch(getPosts());

      _.chain(getState().posts)
      .map('userId')
      .uniq()
      .forEach(id => dispatch(getUser(id)))
      .value();
  }
};
