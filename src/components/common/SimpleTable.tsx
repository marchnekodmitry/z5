import React from 'react';
import styled from 'styled-components';

import palette from '@/utils/styles/palette';

interface Props {
  rowsMap: Array<{
    title: string;
    data: (item: Object) => React.ReactNode;
  }>;
  item: Object;
}

const SimpleTable: React.FC<Props> = ({ rowsMap, item }) => (
  <StyledTable>
    {rowsMap.map(({ title, data }) => (
      <tr>
        <th>{title}</th>
        <td>{data(item)}</td>
      </tr>
    ))}
  </StyledTable>
);

const StyledTable = styled.table`
    font-size: 13px;
    line-height: 16px;
    color: ${palette.dark_grey};

    th {
        text-align: right;
        font-weight: normal;

        &::after {
            content: ':';
        }
    }
`;

export default SimpleTable;
