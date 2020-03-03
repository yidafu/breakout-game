/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Tuesday, 3rd March 2020 11:38 am                            *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Tuesday, 3rd March 2020 11:38 am                           *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */

import { createStore, combineReducers, applyMiddleware, compose, Store } from 'redux';
import { ballReducer } from './ball/reducer';
import { stageReducer } from './stage/reducer';

const rootReducer = combineReducers({
  ball: ballReducer,
  stage: stageReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export function getStore(): Store {
  // @ts-ignore
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // const middleware: void[] = [];

  const store = createStore(
    rootReducer,
    composeEnhancers(
    //  applyMiddleware( ...middleware)
    ),
  );

  store.subscribe(() => {
    console.log('[subscribe][getState]', store.getState());
  });

  return store;
}
