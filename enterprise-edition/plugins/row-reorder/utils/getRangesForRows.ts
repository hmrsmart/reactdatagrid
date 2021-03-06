/**
 * Copyright © INOVUA TRADING.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RangeResultType } from '../../../types';

const getRangesForRows = ({
  count,
  initialOffset,
  rowHeightManager,
  initialScrollTop,
}: {
  count: number;
  initialOffset: number;
  rowHeightManager: any;
  initialScrollTop: number;
}): RangeResultType[] => {
  const result = [...Array(count)].map((_, i) => {
    const rowHeight = rowHeightManager.getRowHeight(i);
    const top = rowHeightManager.getRowOffset(i);

    let offset = top + initialOffset - (initialScrollTop || 0);
    const bottom = offset + rowHeight;

    const result = {
      top: offset,
      bottom: bottom,
      height: rowHeight,
      index: i,
    };

    return result;
  });

  return result;
};

export default getRangesForRows;
