import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Loading from '../../../Loading';
import FollowersPresenter from './FollowersPresenter';
import { FOLLOWER_SERVER } from '../../../Config';

function Followers({ hostId }) {
  const userId = localStorage.getItem('userId');
  const variable = { hostId: hostId, userId: userId };

  const [HostFollowers, setHostFollowers] = useState([]);
  const [loading, setloading] = useState(false);

  const showFollowers = async () => {
    try {
      const response = await Axios.post(`${FOLLOWER_SERVER}/show-host-followers`, variable);
      setHostFollowers(response.data.followers);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setloading(true);
    showFollowers();
    setloading(false);
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && <FollowersPresenter HostFollowers={HostFollowers} />}
    </>
  );
}

export default Followers;
