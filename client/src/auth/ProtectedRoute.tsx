import { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useStore } from '../App';

const ProtectedRoute: FC<RouteProps> = ({
  component: Component,
  ...rest
}: RouteProps) => {
  const isAuthenticated = useStore().userStore.getAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        // @ts-ignore
        isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};

export default ProtectedRoute;
