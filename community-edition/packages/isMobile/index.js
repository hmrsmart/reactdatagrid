/**
 * Copyright © INOVUA TRADING.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import hasTouch from '../../packages/hasTouch';
import { getGlobal } from '../../getGlobal';
const globalObject = getGlobal();
const mobileTest = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(globalObject.navigator ? globalObject.navigator.userAgent : '');
export default hasTouch && mobileTest;
