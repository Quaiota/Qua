import { observer } from 'mobx-react';
import { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useStore } from '../App';
import { Heading1 } from '../UI/atom/Typography';

const Home = memo(() => {
  const appHistory = useHistory();
  const store = useStore().userStore;
  const setLogin = async () => {
    store.getAuth(true).then(() => appHistory.push('/dashboard'));
    console.log(store.auth);
  };
  return (
    <div>
      <Heading1>Hello Quaiota</Heading1>
      <button onClick={setLogin}>login in</button>
    </div>
  );
});

export default Home;
