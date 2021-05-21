import React, { useEffect } from "react";
import { Typography, Menu, Empty } from "antd";
// const { SubMenu } = Menu;
const { Title } = Typography;

const emptyStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  flexGrow: "1",
  height: "100%",
};

function MyTicketPage() {
  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

  // const handleMenuClick = () => {};

  return (
    <div className="app">
      <Title level={2}>Tickets</Title>
      <Menu
        // onClick={handleMenuClick}
        defaultSelectedKeys="available"
        mode="horizontal"
      >
        <Menu.Item key="available">Available (0)</Menu.Item>
        <Menu.Item key="used/expired">Used/Expired (0)</Menu.Item>
      </Menu>
      <div style={emptyStyle}>
        <Empty description="Nothing here" style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default MyTicketPage;
