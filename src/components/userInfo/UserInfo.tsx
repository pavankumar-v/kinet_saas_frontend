import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Spinner from '@components/ui/Spinner';

const UserInfo = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner />;
  }

  return isAuthenticated ? (
    <div>
      <img src={user?.picture || ''} alt={user?.name} />
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  ) : (
    <></>
  );
};

export default UserInfo;
