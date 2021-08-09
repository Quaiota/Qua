import Image from 'assets/images/avatar.png'
import BannerImage from 'assets/images/banner.jpg'
import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
  display: flex;
  flex-direction: column;
`
const Banner = styled.div`
  background: url(${BannerImage}) no-repeat center center / cover;
  margin: 0;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
`
const Profile = styled.div`
  position: relative;
  top: -2.8rem;
  display: flex;
  flex-direction: column;
  padding: 0.2rem 2rem;
`
const Avatar = styled.img`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  border: 4px solid #0e0f0f;
`
const UserName = styled.h1`
  font-size: 16px;
  font-weight: bold;
`

const Header = () => {
  return (
    <Container>
      <Banner>
        <h3>Welcome to internet 3.0</h3>
      </Banner>

      <Profile>
        <Avatar src={Image} alt="Avatar" />
        <UserName>@LordRose</UserName>
      </Profile>
    </Container>
  )
}

export default Header
