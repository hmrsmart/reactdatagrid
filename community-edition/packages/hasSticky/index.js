/**
 * Copyright © INOVUA TRADING.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { getGlobal } from '../../getGlobal';
const globalObject = getGlobal();
const div = globalObject.document && globalObject.document.createElement
    ? globalObject.document.createElement('div')
    : null;
let HAS_STICKY = false;
let sticky;
if (div) {
    div.style.position = 'sticky';
    if (div.style.position === 'sticky') {
        sticky = 'sticky';
        HAS_STICKY = true;
    }
    if (!HAS_STICKY) {
        div.style.position = '-webkit-sticky';
        if (div.style.position === '-webkit-sticky') {
            HAS_STICKY = true;
            sticky = '-webkit-sticky';
        }
    }
}
export default () => HAS_STICKY;
export { sticky };
