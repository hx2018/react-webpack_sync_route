import React from "react";
import logo from "@/assets/logo.png";
import "./NavigationBar.less";

export default function NavigationBar() {
  return (
    <div className="NavigationBar">
      <img className="NavigationBar__logo" src={logo}></img>
      <h1>小圆马舍后台管理系统</h1>
    </div>
  );
}
