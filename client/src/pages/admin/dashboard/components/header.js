import Image from 'assets/images/avatar.png'
import BannerImage from 'assets/images/banner.jpg'
import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin-top: 4rem;
`
const Banner = styled.div`
  background: linear-gradient(
      180deg,
      rgba(14, 15, 15, 0) 0%,
      rgba(14, 15, 15, 0.576) 100%
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08));

  /* url(${BannerImage}) no-repeat center center / cover; */
  margin: 0;
  padding: 2rem 2rem;
  display: flex;
  justify-content: center;
  border-radius: 24px;
`
const Profile = styled.div`
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
        <Profile>
          <Avatar src={Image} alt="Avatar" />
          <UserName>@LordRose</UserName>
        </Profile>
      </Banner>
    </Container>
  )
}

export default Header
