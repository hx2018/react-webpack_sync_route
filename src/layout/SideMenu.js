import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon } from "antd";
import "./SideMenu.less";

const { Item, SubMenu } = Menu;

const MENUS = [
  {
    path: "/resume",
    text: "简历管理",
    icon: "file",
  },
  {
    path: "/user",
    text: "用户管理",
    icon: "user",
    children: [
      {
        path: "/user/list",
        text: "用户列表",
      },
      {
        path: "/user/add",
        text: "添加用户",
      },
    ],
  },
  {
    path: "/blog",
    text: "博客管理",
    icon: "book",
    children: [
      {
        path: "/blog/list",
        text: "博客列表",
      },
      {
        path: "/blog/add",
        text: "添加博客",
      },
    ],
  },
];

function SideMenu(props) {
  const {
    location: { pathname },
  } = props;

  const renderMenuItem = (item) => (
    <Item key={item.path}>
      <Link to={item.path}>
        {item.icon ? <Icon type="file" /> : null}
        {item.text}
      </Link>
    </Item>
  );

  const renderMenu = (menus) =>
    menus.map((menu) => {
      if (menu.children && menu.children.length > 0) {
        return (
          <SubMenu
            key={menu.path}
            title={
              <>
                <Icon type={menu.icon} /> <span>{menu.text}</span>
              </>
            }
          >
            {menu.children.map((item) => renderMenuItem(item))}
          </SubMenu>
        );
      } else {
        return renderMenuItem(menu);
      }
    });

  return (
    <Menu
      className="SideMenu"
      defaultSelectedKeys={["resume"]}
      mode="inline"
      theme="dark"
      onSelect={() => {}}
    >
      {renderMenu(MENUS)}
    </Menu>

    // <Menu
    //   className="SideMenu"
    //   defaultSelectedKeys={["resume"]}
    //   mode="inline"
    //   theme="dark"
    //   onSelect={() => {
    //     console.log("+++");
    //   }}
    // >
    //   <Item key="resume">
    //     <Link to="/resume">
    //       {" "}
    //       <Icon type="file" />
    //       简历管理
    //     </Link>
    //   </Item>
    //   <SubMenu
    //     key="user"
    //     title={
    //       <>
    //         <Icon type="user" />
    //         <span>用户管理</span>
    //       </>
    //     }
    //   >
    //     <Item key="userList">
    //       <Link to="/user/list">用户列表</Link>
    //     </Item>
    //     <Item key="userAdd">
    //       <Link to="/user/add">添加用户</Link>
    //     </Item>
    //   </SubMenu>

    //   <SubMenu
    //     key="blog"
    //     title={
    //       <>
    //         <Icon type="book" /> <span>博客管理</span>
    //       </>
    //     }
    //   >
    //     <Item key="blogList">
    //       <Link to="/blog/list">博客列表</Link>
    //     </Item>
    //     <Item key="blogAdd">
    //       <Link to="/blog/add">添加博客</Link>
    //     </Item>
    //   </SubMenu>
    // </Menu>
  );
}

export default withRouter(SideMenu);
