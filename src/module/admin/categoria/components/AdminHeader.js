import React from "react";
import { NavLink } from "react-router-dom";
const AdminHeader = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                to="/admin/categorias"
                className="nav-link"
              >
                categorias
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/marcas"
                className="nav-link"
              >
                marcas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/medidas"
                className="nav-link"
              >
                medidas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/productos"
                className="nav-link"
              >
                productos
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
