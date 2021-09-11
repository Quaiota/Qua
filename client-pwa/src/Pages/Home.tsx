import { useHistory } from 'react-router-dom';
import { Heading1 } from '../UI/atom/Typography';

const Home = () => {
  const appHistory = useHistory();
  const setLogin = () => {
    appHistory.push('/dashboard');
  };
  return (
    <div>
      <Heading1>Hello Quaiota</Heading1>
      <button onClick={setLogin}>login in</button>
    </div>
  );
};

export default Home;
