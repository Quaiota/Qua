import { memo } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { useStore } from '../App';

const Home = memo(() => {
  const appHistory = useHistory();
  const store = useStore().userStore;
  const setLogin = async () => {
    store.getAuth(true).then(() => appHistory.push('/dashboard'));
    console.log(store.auth);
  };
  return (
    <MainBox>
      <button onClick={setLogin}>login in</button>
    </MainBox>
  );
});

const MainBox = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  background: #fafafa;
  padding: 1.5rem;
`;

export default Home;
