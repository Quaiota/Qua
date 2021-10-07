import styled from '@emotion/styled';
import { useState } from 'react';
import Modal from '../ui/organisms/modal/Modal';
const ConstructionSite = () => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };
  return (
    <StyleContent>
      <button onClick={toggleModal}>open modal</button>
      <Modal show={show} close={toggleModal}>
        <div className='display'>
          <h1>Hello world</h1>
        </div>
      </Modal>
    </StyleContent>
  );
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
