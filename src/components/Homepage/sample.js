import React, { useState } from "react";
import { Menu, Input, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
// import logo from "./logo.png";

const { SubMenu } = Menu;
const { Search } = Input;

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <div className="navbar" style={{ backgroundColor: "rgb(40, 47, 140)" }}>
        <div className="navbar-logo">
          <a href="/">
            <img
              // src={logo}
              alt="Logo"
              style={{ height: "inherit", padding: "20px" }}
            />
          </a>
        </div>
        <div className="navbar-search">
          <Search
            placeholder="Search"
            style={{
              width: "100%",
              margin: "20px 0",
              backgroundColor: "rgb(50, 57, 150)",
            }}
          />
        </div>
        <div className="navbar-toggle">
          <MenuOutlined
            style={{ fontSize: "20px", color: "#fff" }}
            onClick={showDrawer}
          />
        </div>
        <Menu
          mode="horizontal"
          style={{ backgroundColor: "rgb(40, 47, 140)", display: "none" }}
        >
          <SubMenu key="categories" title="Categories">
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="about">About</Menu.Item>
            <Menu.Item key="contact">Contact</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <Drawer
        title="Categories"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={drawerVisible}
      >
        <Menu mode="inline" style={{ border: "none" }}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
};

export default Navbar;
