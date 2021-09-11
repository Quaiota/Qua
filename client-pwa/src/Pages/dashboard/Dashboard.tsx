import { Heading1 } from '../../UI/atom/Typography/Typography';
import { observer } from 'mobx-react';
import { useStore } from '../../App';
import { useHistory } from 'react-router';

const Dashboard = observer(() => {
  const store = useStore().userStore;
  const history = useHistory();
  const logout = () => {
    store.getAuth(false);
    history.replace('/');
  };
  return (
    <div>
      <Heading1>Dashboard</Heading1>
      {store.name}

      <button onClick={logout}>log out</button>
    </div>
  );
});

export default Dashboard;
