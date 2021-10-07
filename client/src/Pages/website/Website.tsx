import styled from '@emotion/styled'
import Logo from '../../UI/atom/icons/Logo'

const Website = () => {
  return (
    <Container>
      <Nav>
        <Logo size="lg" />
      </Nav>
      <Main>
        <SectionOne>
          <AsideLeft>
            <h1>Quaiota</h1>
            <p>
              Your decentralized web3 profile where you can access apps and
              systems that enables everyone to build wealth on the internet
              <br />
              <br />
              Built on the Etheruem Blockchain.
            </p>
            <Wrapper>
              <CTA>Launch app</CTA>
              <Button>Learn more</Button>
            </Wrapper>
          </AsideLeft>
          <AsideRight>{/* <img src={} alt="" /> */}</AsideRight>
        </SectionOne>
      </Main>
    </Container>
  )
}

export default Website

const Nav = styled.nav`
  background: transparent;
  position: fixed;
  width: 100%;

  padding: 24px 8rem 24px 8rem;
`

const Container = styled.div`
  background: ${({ theme }) => theme.black.matteblack};
  color: ${({ theme }) => theme.primary.sea3};
  height: 100vh;
`

const Main = styled.main``

const SectionOne = styled.section`
  display: flex;
`

const AsideLeft = styled.aside`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 8rem 0 8rem;
  width: 100%;

  h1 {
    font-family: 'Darker Grotesque', sans-serif;
    font-size: 72px;
    font-weight: 900;
    margin-bottom: 2rem;
  }

  p {
    font-size: 16px;
    width: 500px;
    opacity: 0.8;
  }
`

const Wrapper = styled.div`
  display: flex;
  padding-top: 2rem;
`

const CTA = styled.button`
  border: none;
  border-radius: 50px;
  background: ${({ theme }) => theme.primary.sea1};
  padding: 12px 16px;
  width: 180px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`

const Button = styled.button`
  border: none;
  border-radius: 50px;
  background: transparent;
  color: ${({ theme }) => theme.primary.sea3};
  padding: 12px 16px;
  width: 180px;
  text-align: center;
  font-size: 18px;
  font-weight: 100;
  text-decoration: underline;
  cursor: pointer;
`

const AsideRight = styled.aside`
  background-color: ${({ theme }) => theme.primary.mint1};
  height: 800px;
  width: 100%;
`
