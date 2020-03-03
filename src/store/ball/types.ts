/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Tuesday, 3rd March 2020 1:06 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Tuesday, 3rd March 2020 1:06 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */

export const BALL_MOVING = 'ball-moving';

export interface Position {
  x: number;
  y: number;
}
export interface BallMovingAction {
  type: typeof BALL_MOVING;
  payload: Position;
}


export type BallAction = BallMovingAction;

export interface BallState {
  currPos: Position;
}
