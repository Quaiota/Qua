import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Profilecard } from '../UI/molecules/ProfileCard/Card.stories';
const ConstructionSite = () => {
  return (
    <StyleContent>
      <StyledNav></StyledNav>
      <section className='section'>
        <StyledSidebar></StyledSidebar>
        <div className='content'>
          <motion.div initial={init} animate={animate}>
            <Profilecard />
          </motion.div>
        </div>
      </section>
    </StyleContent>
  );
};

const init = {
  opacity: 0,
};
const animate = {
  opacity: 1,
};

const StyleContent = styled.div`
  background: ${({ theme }) => theme.black.matteblack};
  min-height: 90vh;

  .section {
    display: flex;

    .content {
      display: block;
      width: 100%;
      padding: 15px;
    }
  }
`;

const StyledNav = styled.nav`
  min-height: 45px;
  padding: 10px;
  background: ${({ theme }) => theme.black.dark4};
`;

const StyledSidebar = styled.section`
  background: ${({ theme }) => theme.black.dark3};
  display: inline-block;
  min-width: 268px;
  height: 70vh;
`;

export default ConstructionSite;
