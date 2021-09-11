import { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

const ProtectedRoute: FC<RouteProps> = ({
  component: Component,
  ...rest
}: RouteProps) => {
  const isAuthenticated = false;

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
