import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserProfilePresenter from './UserProfilePresenter';

const UserProfileContainer = ({ match }) => {
  const userName = match.params.userName;
  const user = useSelector((state) => state.user.userData);
  const history = user?.history;

  return <UserProfilePresenter userName={userName} history={history} />;
};

export default UserProfileContainer;
