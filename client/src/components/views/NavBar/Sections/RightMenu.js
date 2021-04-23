/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Menu, Button, Modal } from "antd";
import LoginPage from "../../LoginPage/LoginPage";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function RightMenu(props) {
  const user = useSelector((state) => state.user);

  //----------------- Modal 관련된 부분 --------------------//
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //----------------- Modal 관련된 부분 --------------------//

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        {/* <Menu.Item key="mail">
          <Link to="/login">Signin</Link>
        </Menu.Item> */}
        <Menu.Item disabled="true">
          <Button onClick={showModal}>Login</Button>
        </Menu.Item>
        <Modal
          title="Login"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <LoginPage />
        </Modal>
        <Menu.Item key="app">
          <Link to="/register">Signup</Link>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="app" style={{ borderBottom: "none" }}>
          <Link to="/">Event</Link>
        </Menu.Item>
        <SubMenu title={<span>Kitchen</span>} style={{ borderBottom: "none" }}>
          <MenuItemGroup>
            <Menu.Item key="setting:1">Kitchens</Menu.Item>
            <Menu.Item key="setting:2">List Your Kitchen</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu title={<span>Hosts</span>} style={{ borderBottom: "none" }}>
          <MenuItemGroup>
            <Menu.Item key="hosts">
              <Link to="/hosts">Hosts</Link>
            </Menu.Item>
            <Menu.Item key="become-a-host">
              <Link to="/become-a-host">Become a Host</Link>
              Become a Host
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu
          style={{ borderBottom: "none" }}
          title={
            <span>
              <UserOutlined />
              My Page
            </span>
          }
        >
          <MenuItemGroup>
            <Menu.Item key="setting:1">My Profile</Menu.Item>
            <Menu.Item key="setting:2">My Tickets</Menu.Item>
            <Menu.Item key="logout">
              <Link style={{ color: "#1890ff" }} to="/" onClick={logoutHandler}>
                Logout
              </Link>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default withRouter(RightMenu);
