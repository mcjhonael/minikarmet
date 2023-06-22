import React from "react";
import { Outlet} from "react-router-dom";
import AdminHeader from "../module/admin/categoria/components/AdminHeader";
const RouterAdmin = () => {
  return (
    <>
      <AdminHeader />
      <main className="container">
        <Outlet/>
      </main>
    </>
  );
};

export default RouterAdmin;
