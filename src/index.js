import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "../static/css/reset.min.css";
// babel-plugin-import插件会在引入antd组件的时候自动按需引入需要的样式
// import "antd/dist/antd.css";

ReactDom.render(<App />, document.getElementById("app"));
