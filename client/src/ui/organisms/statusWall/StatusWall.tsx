import styled from '@emotion/styled';
import React from 'react';
import AddStatus from '../../molecules/addStatus/AddStatus';
import EmptyWall from '../../molecules/emptyWall/EmptyWall';

const StatusWall = () => {
  return (
    <MainBox>
      <AddStatus />
      <EmptyWall />
    </MainBox>
  );
};

export default StatusWall;

const MainBox = styled.main``;
