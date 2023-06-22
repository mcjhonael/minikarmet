import React from "react";
import { Outlet} from "react-router-dom";
import AdminHeader from "../module/admin/categoria/components/AdminHeader";
// import Home from "../module/admin/categoria/components/Home";
// import AdminCategorias from "../module/admin/categoria/screen/AdminCategorias";
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
