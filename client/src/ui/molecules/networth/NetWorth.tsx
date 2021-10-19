import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Card from '../../atom/card/Card'
import CircleFrame from '../../atom/circle-frame/CircleFrame'
import DownloadIcon from '../../atom/icons/DownloadIcon'
import GearIcon from '../../atom/icons/GearIcon'
import QuaIcon from '../../atom/icons/QuaIcon'
import SendIcon from '../../atom/icons/SendIcon'
import SwapIcon from '../../atom/icons/SwapIcon'
import NetWorthBtn from '../../atom/NetWorthBtn'
import Spacer from '../../atom/spacer/spacer'
import TextWrap from '../../atom/typography/TextWrap'

const NetWorth = () => {
  const color = useTheme()
  return (
    <Card color={color.black.dark2}>
      <StyledWorthCard>
        <CardHeader>
          <div className="caption">
            <CircleFrame circleSize="sm" />
            <Spacer size="10px" horizontalSpace />
            <TextWrap fontSize="h2">Networth</TextWrap>
          </div>
          <motion.button>
            <GearIcon />
          </motion.button>
        </CardHeader>
        <Spacer size="12px" />
        <CardHeader>
          <div className="caption">
            <QuaIcon />
            <Spacer size="10px" horizontalSpace />
            <TextWrap fontSize="h3">{`0 QUA`}</TextWrap>
          </div>
        </CardHeader>
        <Spacer size="24px" horizontalSpace />
        <TextWrap fontSize="body">$0 USD</TextWrap>
        <Spacer size="1rem" />
        <div className="actions">
          <NetWorthBtn Icon={<SendIcon />} text="send" />
          <NetWorthBtn Icon={<SwapIcon />} text="swap" />
          <NetWorthBtn Icon={<DownloadIcon />} text="buy" />
        </div>
      </StyledWorthCard>
    </Card>
  )
}

export default NetWorth

const StyledWorthCard = styled.div`
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .caption {
    display: flex;
    align-items: center;
  }
  button {
    background: none;
    padding: 8px;
    border: none;
    outline: none;
    cursor: pointer;
  }
`
