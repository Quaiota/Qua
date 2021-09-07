import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0 1rem;
`

const Text = styled.h2`
  font-weight: bold;
  font-size: 32px;
  line-height: 47px;
  letter-spacing: 0.15px;
  margin-bottom: 0;

  color: rgba(255, 255, 255, 0.9);
`

const Title = ({ title }) => {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  )
}

export default Title
