import { stageInitActtion } from './action';

/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Tuesday, 3rd March 2020 1:16 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Tuesday, 3rd March 2020 1:16 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */

export const STAGE_INIT = 'stage-init';

export interface StageInitAction {
  type: typeof STAGE_INIT;
}

export interface StageState {
  score: number;
}

export type StageAction = StageInitAction;
