import React from "react";
import { Outlet } from "react-router-dom";
import "./../module/auth/style/auth.css";

const RouteAuth = () => {
  return (
    <>
        <main className="container">
          <Outlet />
        </main>
    </>
  );
};

export default RouteAuth;
