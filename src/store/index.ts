import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer as counterReducer } from './counter/reducer';
import { reducer as listReducer } from './list/reducer';
import { reducer as authReducer } from './auth/reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  list: listReducer,
  auth: authReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

declare module 'react-redux' {
  interface DefaultRootState extends ReturnType<typeof rootReducer> {}
}
