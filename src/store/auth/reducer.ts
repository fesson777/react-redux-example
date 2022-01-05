import { Actions } from './action';
import { types } from './action';

type AuthState = {
  token: string | undefined;
  username: string;
};

const initState: AuthState = { token: undefined, username: '' };

export function reducer(state = initState, action: Actions): AuthState {
  switch (action.type) {
    case types.SET_AUTH:
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
      };
    default:
      return state;
  }
}
