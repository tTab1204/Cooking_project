import React, { useState, useSelector } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon } from "antd";
import "./Sections/Navbar.css";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

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
        position: "fixed",
        zIndex: 5,
        width: "100%",
        paddingLeft: "15%",
        paddingRight: "15%",
      }}
    >
      <div className="menu__logo">
        {/* Link: 애플리케이션은 그대로 유지한 상태에서 페이지의 주소만 변경해줌 */}
        <Link to="/">Souskasa</Link>
      </div>
      <div className="menu__container">
        <div className="menu_left">{/* <LeftMenu mode="horizontal" /> */}</div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>

        <MenuOutlined
          style={{ fontSize: "20px", color: "#1890ff" }}
          className="menu__mobile-button"
          onClick={showDrawer}
        />

        <Drawer
          title="user"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  );
}

export default NavBar;
