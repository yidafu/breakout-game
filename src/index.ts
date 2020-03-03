/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Friday, 28th February 2020 10:26 pm                         *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Tuesday, 3rd March 2020 11:31 am                           *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import { getStore } from './store/index';
import './style.css';
import { STAGE_INIT } from './store/stage/types';

export interface GameOption{
  container: HTMLElement | string;
  renderer?: 'html' | 'canvas';
}

class BreakoutGame {
  public static store = getStore();

  public static run(options: GameOption): void {
    console.log(options);
    this.store.dispatch({
      type: STAGE_INIT,
    });
  }

  public static initScene(): void {
    console.log('init scene');
  }
}


BreakoutGame.run({
  container: '#app',
});
