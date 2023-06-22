import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminCategoria from "../module/admin/categoria/screen/AdminCategorias";
import AdminMarcas from "../module/admin/marcas/screens/AdminMarcas";
import AdminMedidas from "../module/admin/medida/screens/AdminMedidas";
import Home from "../module/admin/categoria/components/Home";
const RouterMain = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categoria">
                Categoria
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/marcas">
                Marcas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/medidas">
                medidas
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/"  element={<Home></Home>} />
        <Route path="/categoria" element={<AdminCategoria/>} />
        <Route path="/marcas" element={<AdminMarcas />} />
        <Route path="/medidas" element={<AdminMedidas />} />
      </Routes>
    </Router>
  );
};

export default RouterMain;
