import React, { useState, useEffect } from "react";
import { List, Avatar } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";

function Followers({ hostId }) {
  const API_FOLLOWERS = "/api/follow";
  const variable = { hostId: hostId };

  const [HostFollowers, setHostFollowers] = useState([]);

  const showFollowers = async () => {
    try {
      const response = await Axios.post(
        `${API_FOLLOWERS}/show-host-followers`,
        variable
      );
      setHostFollowers(response.data.followers);
    } catch {
      console.error();
    }
  };

  useEffect(() => {
    showFollowers();
  }, []);

  return (
    <>
      {HostFollowers && (
        <List
          header={<div>{HostFollowers.length} followers</div>}
          itemLayout="horizontal"
          dataSource={HostFollowers}
          renderItem={(follower, index) => (
            <List.Item key={index}>
              <List.Item.Meta
                avatar={<Avatar src={follower.userFrom.image} />}
                title={follower.userFrom.name}
                description={[
                  <Link to={`/users/${follower.userFrom.name}`}>
                    @{follower.userFrom.name}
                  </Link>,
                ]}
              />
            </List.Item>
          )}
        />
      )}
    </>
  );
}

export default Followers;
