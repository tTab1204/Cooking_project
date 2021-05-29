import React from "react";
import { Typography, Menu, Empty } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { EmptyWrapper } from "./MyTicketStyle";

const { Title } = Typography;

function MyTicketPage() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Title level={2}>Tickets</Title>
      <Menu
        // onClick={handleMenuClick}
        defaultSelectedKeys="available"
        mode="horizontal"
      >
        <Menu.Item key="available">Available (0)</Menu.Item>
        <Menu.Item key="used/expired">Used/Expired (0)</Menu.Item>
      </Menu>
      {/* {user.userData && user.userData.cart && (
     
      )} */}

      {user.userData && !user.userData.cart && (
        <EmptyWrapper>
          <Empty description="Nothing here" style={{ width: "100%" }} />
        </EmptyWrapper>
      )}
    </>
  );
}

export default MyTicketPage;
