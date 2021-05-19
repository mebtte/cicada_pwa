/* eslint-disable react/no-array-index-key */
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Style = styled.table``;

function Table<Row>({
  array,
  headers,
  rowRenderer,
  ...props
}: {
  array: Array<Row>;
  headers: ReactNode[];
  rowRenderer: (row: Row) => ReactNode[];
  [key: string]: any;
}) {
  return (
    <Style {...props}>
      <thead>
        <tr>
          {headers.map((h, index) => (
            <th key={index}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {array.map((row, i) => (
          <tr key={i}>
            {rowRenderer(row).map((d, j) => (
              <td key={j}>{d}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Style>
  );
}

export default Table;
