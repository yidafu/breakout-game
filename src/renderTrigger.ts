/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Tuesday, 3rd March 2020 8:37 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Tuesday, 3rd March 2020 8:37 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import { getStore } from './store';
/**
 *
 *
 */
function renderTrigger() {
  const state = getStore().getState();
}

export function startRenderLoop(): Function {
  const requestId = requestAnimationFrame(renderTrigger);
  return (): void => {
    cancelAnimationFrame(requestId);
  };
}
