import React from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';

import ErrorCard from '@/components/error_card';
import Page from '../page';
import useData from './use_data';
import { containerStyle } from './constants';
import Top from './top';
import TopSkeleton from './top/skeleton';

const Style = styled(Page)`
  position: relative;
`;
const ErrorCardContainer = styled(animated.div)`
  ${containerStyle}

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled(animated.div)`
  ${containerStyle}

  display: flex;
  flex-direction: column;
`;

const PublicMusicbill = ({ id }: { id: string }) => {
  const { data, reload } = useData(id);
  const transitions = useTransition(data, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <Style>
      {transitions((style, d) => {
        if (d.error) {
          return (
            <ErrorCardContainer style={style}>
              <ErrorCard errorMessage={d.error.message} retry={reload} />
            </ErrorCardContainer>
          );
        }
        if (d.loading) {
          return (
            <Container style={style}>
              <TopSkeleton />
            </Container>
          );
        }
        return (
          <Container style={style}>
            <Top musicbill={d.musicbill} />
          </Container>
        );
      })}
    </Style>
  );
};

export default PublicMusicbill;
