import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer } from "antd";
import "./Sections/Navbar.css";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { NavbarContainer, NavLogo } from "./Sections/NavBarStyle";

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav
      className="menu"
      style={{
        width: "100%",
      }}
    >
      <NavbarContainer>
        <NavLogo>
          {/* Link: 애플리케이션은 그대로 유지한 상태에서 페이지의 주소만 변경해줌 */}
          <Link to="/">Cooking</Link>
        </NavLogo>
        <div className="menu__container">
          <div className="menu_left">
            <LeftMenu mode="horizontal" />
          </div>
          <div className="menu_rigth">
            <RightMenu mode="horizontal" />
          </div>

          <MenuOutlined
            style={{ fontSize: "24px", color: "#1890ff" }}
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
              fontFamily: `"Do Hyeon", sans-serif`,
            }}
          >
            <LeftMenu mode="inline" />
            <RightMenu mode="inline" />
          </Drawer>
        </div>
      </NavbarContainer>
    </nav>
  );
}

export default NavBar;
