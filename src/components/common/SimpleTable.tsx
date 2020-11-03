import React from 'react';
import styled from 'styled-components';

interface Props {
  rowsMap: Array<{
    title: string;
    data: (item: Object) => React.ReactNode;
  }>;
  item: Object;
}

const SimpleTable: React.FC<Props> = ({ rowsMap, item }) => (
  <table>
    {rowsMap.map(({ title, data }) => (
      <tr>
        <th>{title}</th>
        <td>{data(item)}</td>
      </tr>
    ))}
  </table>
);

export default SimpleTable;
