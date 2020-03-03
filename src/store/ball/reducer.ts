/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Tuesday, 3rd March 2020 11:54 am                            *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Tuesday, 3rd March 2020 11:54 am                           *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */

import { BallState, BallAction, BALL_MOVING } from './types';

const initialState: BallState = {
  currPos: { x: 0, y: 0 },
};

export function ballReducer(state = initialState, action: BallAction): BallState {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case BALL_MOVING: {
      return {
        ...state,
        currPos: action.payload,
      };
    }
  }

  return state;
}
