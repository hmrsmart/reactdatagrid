/**
 * Copyright © INOVUA TRADING.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DataGridFactory from './factory';
import SortableColumns from './plugins/sortable-columns';
import Filters from './plugins/filters';
import Menus from './plugins/menus';
import CellSelection from './plugins/cell-selection';
import { TypePlugin } from './types';

export const plugins = [
  SortableColumns,
  Filters,
  Menus,
  (CellSelection as any) as TypePlugin,
];

const ReactDataGrid = DataGridFactory(
  {
    plugins,
  },
  'community'
);

export default ReactDataGrid;
