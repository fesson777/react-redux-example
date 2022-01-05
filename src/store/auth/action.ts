export const types = {
  SET_AUTH: 'auth/SET_AUTH',
} as const;

type AuthPayload = { token: string; username: string };

export type SetAuthAction = {
  type: typeof types.SET_AUTH;
  payload: AuthPayload;
};

export type Actions = SetAuthAction;

export function setAuthAction(payload: AuthPayload): SetAuthAction {
  return { type: types.SET_AUTH, payload };
}
