/* eslint-disable react/no-array-index-key */
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Style = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
  th,
  td {
    font-size: 14px;
    text-align: left;
  }
  th {
    padding: 20px;
    color: #000;
    background-color: rgb(0 0 0 / 0.04);
    font-weight: bold;
  }
  td {
    padding: 10px 20px;
    color: #333;
    border-bottom: 1px solid rgb(242 242 242);
    background-color: #fff;
  }
`;

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
