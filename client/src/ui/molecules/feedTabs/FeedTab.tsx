import styled from '@emotion/styled';
import React from 'react';
import Button from '../../atom/button/Button';
import TabMenu from '../../atom/icons/TabMenu';

const tabs = ['top', 'Academia', 'Entertainment', 'Science', 'Tech'];

const FeedTabs = () => {
  return (
    <StyledFeedTab>
      {tabs.map((name) => (
        <Button btnType='solid' className='tab'>
          {name}
        </Button>
      ))}
      <button type='button' className='more-tabs'>
        <TabMenu />
      </button>
    </StyledFeedTab>
  );
};

export default FeedTabs;

const StyledFeedTab = styled.div`
  display: flex;
  max-height: 60px;
  overflow-x: auto;
  align-items: center;
  position: relative;

  .tab {
    margin-right: 12px;
    font-weight: bold;
    transition: 300ms linear;
    padding-block: 8px;
    padding-inline: 1rem;
    :first-child {
      margin-left: 12px;
    }
    :hover,
    :focus,
    :active {
      background: ${({ theme }) => theme.primary.white + 'ee'};
      color: ${({ theme }) => theme.black.matteblack};
    }
  }

  .more-tabs {
    position: sticky;
    right: 0;
    width: 70px;
    padding: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    background: ${({ theme }) =>
      `linear-gradient(90deg,${theme.black.matteblack}22 , ${theme.black.matteblack})`};
    top: 0;
    bottom: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
