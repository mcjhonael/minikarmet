import React from "react";
import { Outlet } from "react-router-dom";
import "./../module/auth/style/auth.css";
import AdminHeader from "../module/admin/categoria/components/AdminHeader";

const RouteAuth = () => {
  return (
    <>
      <AdminHeader />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default RouteAuth;
