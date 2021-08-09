import Tube from 'assets/images/tube.png'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 1.4rem;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)),
    linear-gradient(0deg, rgba(84, 18, 129, 0.8), rgba(84, 18, 129, 0.8)),
    url(${Tube}) no-repeat center center / cover;
  border-radius: 24px;
`
const Name = styled.h2`
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
`
const Token = styled.div`
  margin-bottom: 4px;
`
const Time = styled(Token)``

const Figure = styled.h2`
  font-size: 24px;
`
const Hours = styled(Figure)``

const Total = styled.p`
  font-size: 16px;
`

const Label = styled.p`
  font-size: 16px;
`

const Analytics = ({ name, figure, sum, time, label }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Token>
        <Figure>{figure}</Figure>
        <Total>Token = {sum}</Total>
      </Token>
      <Time>
        <Hours>{time}</Hours>
        <Label>{label}</Label>
      </Time>
    </Container>
  )
}

export default Analytics
