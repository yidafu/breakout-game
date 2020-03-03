/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Tuesday, 3rd March 2020 11:55 am                            *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Tuesday, 3rd March 2020 11:55 am                           *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import { STAGE_INIT, StageState, StageAction } from './types';

const initialState: StageState = {
  score: 0,
};
export function stageReducer(state = initialState, action: StageAction): StageState {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case STAGE_INIT: {
      state.score += 1;
    }
  }

  return state;
}
