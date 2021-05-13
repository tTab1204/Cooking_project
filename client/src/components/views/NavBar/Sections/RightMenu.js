import React from "react";
import { Menu } from "antd";
// import LoginPage from "../../LoginPage/LoginPage";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function RightMenu(props) {
  const user = useSelector((state) => state.user);

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
        <Menu.Item key="mail">
          <Link to="/login">Signin</Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/register">Signup</Link>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="app" style={{ borderBottom: "none" }}>
          <Link to="/events">Event</Link>
        </Menu.Item>

        <SubMenu title={<span>Kitchen</span>} style={{ borderBottom: "none" }}>
          <MenuItemGroup>
            <Menu.Item key="kitchens">
              <Link to="/kitchens">Kitchen</Link>
            </Menu.Item>
            <Menu.Item key="list-your-kitchen">
              <Link to="/list-your-kitchen">List Your Kitchen</Link>
            </Menu.Item>
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
            <Menu.Item key="my-profile">My Profile</Menu.Item>
            <Menu.Item key="my-ticket">My Tickets</Menu.Item>
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
