import React, { useState, useEffect } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer } from 'antd';
import './Sections/Navbar.css';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { NavbarContainer, NavLogo, Nav } from './Sections/NavBarStyle';
import { throttle } from 'lodash';

const removeLinkColor = { color: 'inherit', textDecoration: 'none' };

function NavBar() {
  const [visible, setVisible] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) setScrollNav(true);
    else setScrollNav(false);
  };

  useEffect(() => {
    const throttleScrollEvent = throttle(() => {
      changeNav();
    }, 30);

    window.addEventListener('scroll', throttleScrollEvent);

    return () => {
      window.removeEventListener('resize', throttleScrollEvent);
    };
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo>
            <Link to="/" style={removeLinkColor}>
              Cooking
            </Link>
          </NavLogo>
          <div className="menu__container">
            <div className="menu_left">
              <LeftMenu mode="horizontal" />
            </div>
            <div className="menu_rigth">
              <RightMenu mode="horizontal" />
            </div>

            <MenuOutlined
              style={{ fontSize: '24px', fontWeight: '400', color: '#389e0d' }}
              className="menu__mobile-button"
              onClick={showDrawer}
            />

            {/* Mobile에서 보이는 사이드 바 */}
            <Drawer
              title="user"
              placement="right"
              className="menu_drawer"
              closable={false}
              onClose={onClose}
              visible={visible}
              style={{
                fontWeight: '500',
              }}
            >
              <LeftMenu mode="inline" />
              <RightMenu mode="inline" />
            </Drawer>
          </div>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
