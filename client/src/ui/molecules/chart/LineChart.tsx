import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Line } from 'react-chartjs-2';
import GraphToggle from '../../atom/graphToggle/GraphToggle';
import ChevronDown from '../../atom/icons/ChevronDown';
import Spacer from '../../atom/spacer/spacer';
import TextWrap from '../../atom/typography/TextWrap';
import breakpoint from '../../configs/breakpoint';
const LineChart = () => {
  const theme = useTheme();
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: theme.primary.mint2,
        borderColor: theme.primary.mint1,
        borderWidth: 2,
        data: [5, 20, 15, 35, 46, 0, 4],
      },
      {
        label: 'Followers',
        fill: false,
        lineTension: 0.5,
        backgroundColor: theme.primary.pop2,
        borderColor: theme.primary.pop1,
        borderWidth: 2,
        data: [15, 25, 35, 35, 56, 10, 4],
      },
    ],
  };

  return (
    <StyledChart>
      <div className='header-bar'>
        <div>
          <TextWrap fontSize='h2'>Social</TextWrap> <ChevronDown />
        </div>
        <div>
          <TextWrap fontSize='bodymd'>Last 7 days</TextWrap> <ChevronDown />
        </div>
      </div>
      <Spacer size='1.5em' />

      <TextWrap fontSize='caption'>Highlights</TextWrap>

      <div></div>
      <Line data={data} />
      <div className='toggle-box'>
        <GraphToggle />
        <GraphToggle />
        <GraphToggle />
      </div>
    </StyledChart>
  );
};

export default LineChart;

const StyledChart = styled.div`
  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-bottom: 1rem;
    div {
      display: inline-flex;
      column-gap: 1rem;
      align-items: center;
    }
  }
  .toggle-box {
    display: flex;
    column-gap: 2em;
    @media (max-width: ${breakpoint.tab}px) {
      display: none;
    }
  }
`;
