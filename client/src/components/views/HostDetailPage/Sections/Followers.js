import React from "react";
import { List, Avatar } from "antd";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Ant Design Title 1",
  },
  {
    id: 2,
    title: "Ant Design Title 2",
  },
  {
    id: 3,
    title: "Ant Design Title 3",
  },
  {
    id: 4,
    title: "Ant Design Title 4",
  },
  {
    id: 5,
    title: "Ant Design Title 5",
  },
];

function Followers() {
  return (
    <>
      <List
        header={<div>336 followers</div>}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              key={item.id}
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description={[<Link to="/">@byron</Link>]}
            />
          </List.Item>
        )}
      />
    </>
  );
}

export default Followers;
