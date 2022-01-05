import { types } from './actions';
import type { Actions } from './actions';

type State = { count: number };
const initState: State = { count: 0 };

export function reducer(state = initState, action: Actions): State {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, count: state.count + 1 };

    case types.DECREMENT:
      return { ...state, count: state.count - 1 };

    case types.RESET:
      return { ...state, count: 0 };

    default:
      return state;
  }
}
