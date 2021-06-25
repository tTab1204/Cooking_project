import React from 'react';
import { List, Avatar } from 'antd';
import { Link } from 'react-router-dom';

function Followers({ HostFollowers }) {
  return (
    <>
      <List
        header={<div>{HostFollowers.length} followers</div>}
        itemLayout='horizontal'
        dataSource={HostFollowers}
        pagination={true}
        renderItem={(follower, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={follower.userFrom && follower.userFrom.image} />}
              title={follower.userFrom && follower.userFrom.name}
              description={[
                <Link to={`/users/${follower.userFrom && follower.userFrom.name}`} key={index}>
                  @{follower.userFrom && follower.userFrom.name}
                </Link>,
              ]}
            />
          </List.Item>
        )}
      />
    </>
  );
}

export default Followers;
