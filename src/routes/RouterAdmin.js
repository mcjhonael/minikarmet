import React from "react";
import SideBar from "../module/admin/categoria/components/SideBar";
import { Outlet } from "react-router-dom";

const RouterAdmin = () => {
  return (
    <>
    <SideBar />
    <Outlet/>
    </>
  );
};

export default RouterAdmin;
