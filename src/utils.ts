/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Tuesday, 3rd March 2020 9:39 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Tuesday, 3rd March 2020 9:39 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
export function typeOf(obj: any): string {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

export function Memo(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
  if (typeof descriptor.get === 'function') {
    const sym = Symbol.for(propertyKey);
    const originalGetter = descriptor.get;
    descriptor.get = function propGetter(): ReturnType<typeof originalGetter> {
      // @ts-ignore
      if (typeOf(this[sym]) === 'Undefined') {
        // @ts-ignore
        this[sym] = originalGetter.call(this);
      }
      // @ts-ignore
      return this[sym];
    };
  }
}
