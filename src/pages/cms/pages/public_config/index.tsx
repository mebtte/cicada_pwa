import React from 'react';
import styled, { css } from 'styled-components';

import IconButton, { Name } from '@/components/icon_button';
import ErrorCard from '@/components/error_card';
import Table from '@/components/table';
import scrollbar from '@/style/scrollbar';
import CircularLoader from '@/components/circular_loader';
import { cmsPage } from '../../style';
import usePublicConfigList from './use_public_config_list';
import { PublicConfig as PublicConfigType } from './constants';

const Style = styled.div<{
  isLoading: boolean;
}>`
  ${cmsPage};
  position: relative;
  > .part {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  > .list {
    ${scrollbar}
    overflow: auto;
    padding: 20px;
    > .table {
      width: 100%;
    }
  }
  > .loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${({ isLoading }) => css`
    > .list {
      opacity: ${isLoading ? 0.5 : 1};
    }
  `}
`;
const ACTION_SIZE = 24;
const headers = ['键', '值', '描述', '操作'];
const rowRenderer = (pc: PublicConfigType) => [
  pc.key,
  pc.value,
  pc.description,
  <IconButton name={Name.EDIT_OUTLINE} size={ACTION_SIZE} />,
];

const PublicConfig = () => {
  const { error, retry, loading, publicConfigList } = usePublicConfigList();

  return (
    <Style isLoading={loading}>
      {error ? (
        <ErrorCard
          className="part"
          errorMessage={error.message}
          retry={retry}
        />
      ) : (
        <>
          <div className="part list">
            <Table
              className="table"
              headers={headers}
              array={publicConfigList}
              rowRenderer={rowRenderer}
              stickyHeader
            />
          </div>
          {loading ? (
            <div className="part loading">
              <CircularLoader />
            </div>
          ) : null}
        </>
      )}
    </Style>
  );
};

export default PublicConfig;
