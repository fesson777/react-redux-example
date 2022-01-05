export const types = {
  INCREMENT: 'counter/INCREMENT',
  DECREMENT: 'counter/DECREMENT',
  RESET: 'counter/RESET',
} as const;

export type IncrementAction = { type: typeof types.INCREMENT };
export type DecrementAction = { type: typeof types.DECREMENT };
export type ResetAction = { type: typeof types.RESET };
export type Actions = IncrementAction | ResetAction | DecrementAction;

export function incrementAction(): IncrementAction {
  return { type: types.INCREMENT };
}
export function decrementAction(): DecrementAction {
  return { type: types.DECREMENT };
}
export function resetAction(): ResetAction {
  return { type: types.RESET };
}
