/* eslint-disable react/no-array-index-key */
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

const Style = styled.table<{ stickyHeader: boolean }>`
  border-radius: 4px;
  border-spacing: 0;
  border-collapse: collapse;
  th,
  td {
    font-size: 14px;
    text-align: left;
  }
  th {
    z-index: 1;
    padding: 20px;
    color: #000;
    background-color: #f6f6f6;
    font-weight: bold;
    top: 0;
  }
  td {
    padding: 10px 20px;
    color: #333;
    background-color: #fff;
    border-bottom: 1px solid #f6f6f6;
  }
  ${({ stickyHeader }) => css`
    th {
      position: ${stickyHeader ? 'sticky' : 'static'};
    }
  `}
`;

function Table<Row>({
  array,
  headers,
  rowRenderer,
  stickyHeader = false,
  ...props
}: {
  array: Array<Row>;
  headers: ReactNode[];
  rowRenderer: (row: Row) => ReactNode[];
  stickyHeader?: boolean;
  [key: string]: any;
}) {
  return (
    <Style {...props} stickyHeader={stickyHeader}>
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
