import React, { useState, useEffect } from "react";
import { List, Avatar } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import Loading from "../../../Loading";

function Followers({ hostId }) {
  const API_FOLLOWERS = "/api/follow";
  const API_RATINGS = "/api/ratings";
  const variable = { hostId: hostId };

  const [HostFollowers, setHostFollowers] = useState([]);
  const [Rates, setRates] = useState([]);
  const [loading, setloading] = useState(false);

  const showFollowers = async () => {
    try {
      const response = await Axios.post(
        `${API_FOLLOWERS}/show-host-followers`,
        variable
      );
      setHostFollowers(response.data.followers);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    showFollowers();

    setloading(false);
  }, []);

  return (
    <>
      {loading && <Loading />}

      {!loading && HostFollowers && (
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
