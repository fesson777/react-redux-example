import { Dispatch } from 'redux';
import { getPosts, getUsers } from '../../api';
import { Post, User } from '../../api/types';
import { DataType } from './types';

export const types = {
  GET_DATA_REQUEST: 'list/GET_DATA_REQUEST',
  SET_USERS_RESPONSE: 'list/SET_USERS_RESPONSE',
  SET_POSTS_RESPONSE: 'list/SET_POSTS_RESPONSE',
} as const;

export type GetDataRequestAction = { type: typeof types.GET_DATA_REQUEST };
export type SetUsersResponseAction = {
  type: typeof types.SET_USERS_RESPONSE;
  payload: User[];
};
export type SetPostsResponseAction = {
  type: typeof types.SET_POSTS_RESPONSE;
  payload: Post[];
};
export type Actions =
  | GetDataRequestAction
  | SetUsersResponseAction
  | SetPostsResponseAction;

export function getDataAction(type: DataType) {
  return async (dispatch: Dispatch) => {
    dispatch({ type: types.GET_DATA_REQUEST });
    if (type === 'posts') {
      const response = await getPosts();
      dispatch({ type: types.SET_POSTS_RESPONSE, payload: response });
    } else {
      const response = await getUsers();
      dispatch({ type: types.SET_USERS_RESPONSE, payload: response });
    }
  };
}
