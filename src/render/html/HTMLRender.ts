/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Tuesday, 3rd March 2020 8:29 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Tuesday, 3rd March 2020 8:29 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import { Render } from '../Render';
import { Memo } from '../../utils';
import { BOX_WIDTH, STICK_WIDTH } from '../const';

export class HTMLRender implements Render {
  public container?: HTMLElement;

  @Memo
  private get stick() {
    const $stick = document.createElement('div');
    $stick.id = 'stick';
    $stick.className = 'stick';
    this.container?.appendChild($stick);
    return $stick;
  }

  public init(container: HTMLElement): void {
    this.container = container;
    this.renderBall();
    this.renderBlocks();
    this.renderStick();
  }

  public update(): void {

  }

  private renderBlocks(): void {

  }

  private renderBall(): void {
  }

  private renderStick() {
    console.log('renderStick');
    const $stick = this.stick;
    $stick.style.bottom = '0px';
    $stick.style.left = `${(BOX_WIDTH - STICK_WIDTH) / 2}px`;
  }
}

