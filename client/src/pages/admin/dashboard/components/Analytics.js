import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 1.4rem;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.04)
    ),
    linear-gradient(0deg, rgba(14, 15, 15, 0.8), rgba(14, 15, 15, 0.8));
  border-radius: 24px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const Name = styled.h2`
  font-weight: bold;
  font-size: 24px;
  /* line-height: 26px; */
`
const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 0.8rem 0 0;

  background: #ffffff;
  border-radius: 50%;
`
const Token = styled.div`
  /* margin-bottom: 4px; */
`
const Figure = styled.h2`
  font-size: 24px;
  margin: 0;
`
const Total = styled.p`
  font-size: 16px;
`

const Analytics = ({ name, figure }) => {
  return (
    <Container>
      <Wrapper>
        <Icon src={Image} alt="Icon" />
        <Name>{name}</Name>
      </Wrapper>
      <Token>
        <Figure>{figure} QUA</Figure>
        <Total>Token earned</Total>
      </Token>
    </Container>
  )
}

export default Analytics
