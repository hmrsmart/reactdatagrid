/**
 * Copyright © INOVUA TRADING.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getGlobal } from '../getGlobal';

const globalObject = getGlobal();

const ua: string = globalObject.navigator
  ? globalObject.navigator.userAgent || ''
  : '';
const IS_EDGE: boolean = ua.indexOf('Edge/') !== -1;
const IS_MS_BROWSER: boolean = IS_EDGE || ua.indexOf('Trident') !== -1;
const IS_IE: boolean = IS_MS_BROWSER && !IS_EDGE;
const IS_FF: boolean = ua.toLowerCase().indexOf('firefox') > -1;

export { IS_EDGE, IS_IE, IS_MS_BROWSER, IS_FF };
