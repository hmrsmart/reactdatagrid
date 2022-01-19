/**
 * Copyright © INOVUA TRADING.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';
import React from 'react';

import DataGrid from '../../../enterprise-edition';

import people from '../people';

const gridStyle = { minHeight: '80vh' };

const times = (arr, n, fn?) => {
  const result = [];

  for (var i = 0; i < n; i++) {
    result.push(
      ...arr.map(x => {
        if (fn) {
          return fn(x, i);
        }
        return {
          ...x,
          id: `${i}-${x.id}`,
        };
      })
    );
  }

  return result;
};
const defaultGroupBy = ['country'];

const defaultCellSelection = { '0-4,id': true, '0-4,desc': true };
class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    const COLS = 20;
    let columns = times([{ name: 'id' }], COLS, (_, i) => {
      return {
        name: i ? `id-${i}` : 'id',
        id: i ? `id-${i}` : 'id',
        // defaultLocked: i < 2 ? 'start' : i > COLS - 2 ? 'end' : false,
        // colspan: () => 1,
        // render: ({ value, rowIndex }) => {
        //   // console.log(`render ${rowIndex} - ${i}`);
        //   return value;
        // },
      };
    });

    this.state = {
      rtl: true,
      columns,
      dataSource: times(
        [
          [...new Array(COLS)].reduce(
            (acc, _, i) => {
              acc[`id-${i}`] = i;
              return acc;
            },
            { id: 0 }
          ),
        ],
        10
      ),
    };
  }

  render() {
    if (!process.browser) {
      return null;
    }
    return (
      <div>
        <div style={{ marginBottom: 20 }}>
          <CheckBox
            checked={this.state.rtl}
            onChange={value => this.setState({ rtl: value })}
          >
            RTL
          </CheckBox>
        </div>
        <DataGrid
          idProperty="id"
          style={gridStyle}
          handle={x => {
            global.x = x;
          }}
          columns={this.state.columns}
          dataSource={this.state.dataSource}
          rtl={this.state.rtl}
          // virtualizeColumnsThreshold={10}
        />
      </div>
    );
  }
}

export default () => <App />;
