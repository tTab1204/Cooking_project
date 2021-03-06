import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  const user = useSelector((state) => state.user);

  return (
    <>
      {user.userData && user.userData.isAdmin && (
        <Menu mode={props.mode}>
          <SubMenu title={<span>Admin</span>} style={{ borderBottom: "none" }}>
            <MenuItemGroup>
              <Menu.Item key="upload-host">
                <Link to="/upload-host">Upload Host</Link>
              </Menu.Item>
              <Menu.Item key="upload-kitchen">
                <Link to="/upload-kitchen">Upload Kitchen</Link>
              </Menu.Item>
              <Menu.Item key="upload-event">
                <Link to="/upload-event">Upload Event</Link>
              </Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
      )}
    </>
  );
}

export default LeftMenu;
