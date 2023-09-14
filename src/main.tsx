import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import "@/assets/style/global.scss";
import "./utils/setRem"
import store from './store/store'
import { Provider } from 'react-redux'
// 导入Ant Design的样式
import 'antd/dist/reset.css'
// 引入 echarts和 地图
import * as echarts from 'echarts';
import { henan } from "./utils/map";
// //注册河南地图
echarts.registerMap("河南", henan as any);
import { BrowserRouter } from "react-router-dom";
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
