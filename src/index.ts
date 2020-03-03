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
import { HTMLRender } from './render/html';

export interface GameOption{
  container: HTMLElement | string;
  renderer?: 'html' | 'canvas';
}

class BreakoutGame {
  public static store = getStore();

  public static run(options: GameOption): void {
    console.log(options);

    let container: HTMLElement;
    if (typeof options.container === 'string') {
      const element = document.querySelector(options.container);
      if (element === null) {
        throw new Error('options.container doesn\'t exsit!');
      }
      container = element as HTMLElement;
    } else {
      container = options.container;
    }

    if (options.renderer === 'canvas') {
      // noop
    } else {
      const render = new HTMLRender();
      render.init(container);
    }
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
