import { Navigate } from "react-router-dom";
import React, { lazy } from "react";
const Web = lazy(() => import("../views/Web/index"));
const Mobile = lazy(() => import("../views/mobile/index"));
const PictureWall = lazy(() => import("../views/PictureWall"));
const routes = [
  {
    path: "/",
    element: <Navigate to="/pictureWall"></Navigate>,
  },
  {
    path: "/web",
    element: <Web></Web>,
  },
  {
    path: "/mobile",
    element: <Mobile></Mobile>,
  },
  {
    path: "/pictureWall",
    element: <PictureWall></PictureWall>,
  },
  {
    path: "*",
    element: <Navigate to="/web" />,
  },
];
export default routes;
