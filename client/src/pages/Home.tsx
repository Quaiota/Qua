import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import Feed from '../assets/images/feed.png'
import Profile from '../assets/images/profile.png'
import Button from '../ui/atom/button/Button'
import Logo from '../ui/atom/logo/Logo'
import Spacer from '../ui/atom/spacer/spacer'
import TextWrap from '../ui/atom/typography/TextWrap'
import breakpoint from '../ui/configs/breakpoint'
import Footer from '../ui/organisms/footer/Footer'
import OnBoard from './onboarding'

const Home = memo(() => {
  const color = useTheme()
  const [show, setShow] = useState(false)
  const toggleModal = () => {
    setShow(!show)
  }

  return (
    <MainBox>
      <Link to="/" className="logoHolder">
        <Logo size="lg" />
      </Link>
      <StyledFlexBox>
        <div className="box">
          <div className="wrapper">
            <TextWrap fontSize="lg" bold="bolder">
              Quaiota
            </TextWrap>

            <Spacer size="1.2rem" />
            <TextWrap fontSize="body">
              Your decentralized web3 profile where you can access apps and
              systems that enables everyone to build wealth on the internet
            </TextWrap>
            <Spacer size="1.5rem" />
            <TextWrap fontSize="body">
              Built on the Etheruem Blockchain.
            </TextWrap>

            <section>
              <Button
                btnType="solid"
                bold="bold"
                onClick={toggleModal}
                bgColor={color.accent.cyan}
                textColor={color.black.matteblack}
              >
                Launch app
              </Button>
              <Link to="/litepaper" className="link">
                Learn more
              </Link>
            </section>
          </div>
        </div>
        <StyledColoredBox color={color.primary.mint1}>
          <div>
            <img src={Profile} alt="Profile Dashboard" />
          </div>
        </StyledColoredBox>
      </StyledFlexBox>

      <StyledFlexBox>
        <StyledColoredBox color={color.primary.pop1}>
          <div>
            <img src={Feed} alt="Social Feed" />
          </div>
        </StyledColoredBox>
        <div className="box">
          <div className="wrapper">
            <TextWrap fontSize="lg" bold="bolder">
              Social
            </TextWrap>

            <Spacer size="1.2rem" />
            <TextWrap fontSize="body">
              Quality social network on the Quaiota focused on decentralized
              media and academia.
            </TextWrap>

            <section>
              <Button
                btnType="solid"
                bold="bold"
                onClick={toggleModal}
                bgColor={color.primary.hot1}
                textColor={color.black.matteblack}
              >
                Join
              </Button>
              <Link to="/" className="link">
                How it works
              </Link>
            </section>
          </div>
        </div>
      </StyledFlexBox>
      <StyledBuiltForPeople>
        <div className="wrapper">
          <h3>Built for Digital People</h3>
          <div className="flexbox">
            <div>
              <Link to="/litepaper" className="link">
                Read the Quaiota litepaper
              </Link>
            </div>
            <div onClick={toggleModal}>
              <p>Get the $QUA Token</p>
            </div>
            <div onClick={toggleModal}>
              <p>Claim your NFT Quaiota ID</p>
            </div>
          </div>
        </div>
      </StyledBuiltForPeople>
      <Footer />
      {show && <OnBoard show={show} toggleModal={toggleModal} />}
    </MainBox>
  )
})

const StyledBuiltForPeople = styled.section`
  padding-block: 12%;
  padding-inline: 1rem;
  .wrapper {
    max-width: 100%;
    margin: 0 auto;
    & h3 {
      font-size: 48px;
      font-family: 'Darker Grotesque';
      color: ${({ theme }) => theme.primary.sea3};

      @media (max-width: ${breakpoint.mobile}px) {
        font-size: 36px;
      }
    }
    .flexbox {
      display: flex;
      flex-wrap: wrap;
      column-gap: 2rem;
      row-gap: 2rem;
      padding-block: 1rem;
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;

      @media (min-width: ${breakpoint.desktop}px) {
        height: 280px;
      }
      @media (max-width: ${breakpoint.mobile}px) {
        row-gap: 1rem;
      }

      div {
        max-width: 340px;
        height: 100%;
        width: 100%;
        background: ${({ theme }) => theme.primary.pop1};
        border-radius: 24px;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;

        @media (max-width: ${breakpoint.mobile}px) {
          padding: 3rem 2rem;
        }

        & a {
          color: ${({ theme }) => theme.black.matteblack};
          text-decoration: none;
        }
        :first-child {
          background: ${({ theme }) => theme.primary.hot1};
        }
        :last-child {
          background: ${({ theme }) => theme.primary.sea1};
        }
      }
    }
  }
  @media (min-width: ${breakpoint.tab}px) {
    .wrapper {
      max-width: 83%;
      .flexbox {
        column-gap: 3rem;
        row-gap: 3rem;
        flex-direction: row;
      }
    }
  }
`

const MainBox = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.black.matteblack};
  height: 100%;
  overflow: auto;

  .logoHolder {
    position: fixed;
    top: 1rem;
    left: 4%;
    z-index: 1000;
  }

  .box {
    max-width: 800px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 1rem;
    padding-block: 20%;
    .wrapper {
      max-width: 420px;
      section {
        display: flex;
        column-gap: 2rem;
        align-items: center;
        padding-top: 2rem;
        button,
        a {
          flex-grow: 1;
        }
        .link {
          padding: 1rem 1.4rem;
          color: ${({ theme }) => theme.primary.white};
          transition: all 0.23s ease-in;
          :hover {
            color: ${({ theme }) => theme.primary.white + 'AE'};
          }
        }
      }
    }
  }
  @media (min-width: ${breakpoint.tab}px) {
    .logoHolder {
      left: 10%;
    }
    .box {
      padding-block: 10%;
    }
  }
`

const StyledColoredBox = styled(motion.div)`
  background: ${(props) => props.color ?? ''};
  min-height: 50vh;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  padding-bottom: 0;
  width: 100%;
  position: relative;

  & img {
    @media (min-width: ${breakpoint.desktop}px) {
      width: 375px;
    }
    @media (max-width: ${breakpoint.mobile}px) {
      width: 100%;
    }
  }
  div {
    height: 100%;
    max-width: 370px;
    width: 100%;
    border-radius: 36px 36px 0 0;
    margin-top: 4%;

    @media (min-width: ${breakpoint.tab}px) {
      margin-top: 6%;
    }
    @media (min-width: ${breakpoint.desktop}px) {
      max-height: 80%;
    }
  }
`

const StyledFlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  @media (min-width: ${breakpoint.tab}px) {
    margin-bottom: 2.5rem;
    flex-wrap: nowrap;
  }
`

export default Home
