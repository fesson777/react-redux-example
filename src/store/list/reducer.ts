import { types } from './actions';
import type { Actions } from './actions';
import { Post, User } from '../../api/types';

type State = { posts: Post[]; users: User[]; pending: boolean };
const initState: State = { posts: [], users: [], pending: false };

export function reducer(state = initState, action: Actions): State {
  switch (action.type) {
    case types.GET_DATA_REQUEST:
      return { ...state, pending: true };

    case types.SET_POSTS_RESPONSE:
      return { ...state, pending: false, posts: action.payload };

    case types.SET_USERS_RESPONSE:
      return { ...state, pending: false, users: action.payload };

    default:
      return state;
  }
}
