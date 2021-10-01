import React, { useState, useEffect } from 'react';
import { Menu, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from 'utils/config';
import { withRouter, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import { getTotal } from 'utils/getTotal';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function RightMenu(props) {
  const user = useSelector(state => state.user.userData);
  const cart = useSelector(state => state.user?.userData?.cart);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push('/login');
      } else {
        alert('Log Out Failed');
      }
    });
  };

  if (user && !user.isAuth) {
    return (
      <>
        <Menu mode={props.mode}>
          <Menu.Item key="mail">
            <Link to="/login">Signin</Link>
          </Menu.Item>
          <Menu.Item key="app">
            <Link to="/register">Signup</Link>
          </Menu.Item>
        </Menu>
      </>
    );
  } else {
    return (
      <>
        {user && (
          <Menu
            style={{ fontSize: '14px', borderBottom: 'none' }}
            mode={props.mode}
          >
            <Menu.Item key="app" style={{ borderBottom: 'none' }}>
              <Link to="/events">Events</Link>
            </Menu.Item>

            <SubMenu
              title={<span>Kitchens</span>}
              style={{ borderBottom: 'none' }}
            >
              <MenuItemGroup>
                <Menu.Item key="kitchens">
                  <Link to="/kitchens">Kitchen</Link>
                </Menu.Item>
                <Menu.Item key="list-your-kitchen">
                  <Link to="/list-your-kitchen">List Your Kitchen</Link>
                </Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <SubMenu
              title={<span>Hosts</span>}
              style={{ borderBottom: 'none' }}
            >
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
              style={{ borderBottom: 'none' }}
              title={
                <span>
                  <Badge
                    overflowCount={10}
                    offset={[0, 2]}
                    count={getTotal(cart)}
                  >
                    <UserOutlined style={{ fontSize: '20px' }} />
                  </Badge>
                </span>
              }
            >
              <MenuItemGroup>
                {user.isHost && (
                  <Menu.Item key="upload-event">
                    <Link to="/upload-event">Upload Event</Link>
                  </Menu.Item>
                )}

                <Menu.Item key="my-profile">
                  <Link to={`/users/${user.name}`}>My Profile</Link>
                </Menu.Item>
                <Menu.Item key="my-tickets">
                  <Badge
                    count={getTotal(cart)}
                    overflowCount={10}
                    offset={[12, 0]}
                  >
                    <Link to="/my-tickets">My Tickets</Link>
                  </Badge>
                </Menu.Item>
                <Menu.Item key="logout">
                  <Link
                    style={{ color: '#1890ff' }}
                    to="/"
                    onClick={logoutHandler}
                  >
                    Logout
                  </Link>
                </Menu.Item>
              </MenuItemGroup>
            </SubMenu>
          </Menu>
        )}
      </>
    );
  }
}

export default withRouter(RightMenu);
