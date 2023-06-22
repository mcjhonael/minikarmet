import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminCategoria from "../module/admin/categoria/screen/AdminCategorias";
import AdminMedidas from "../module/admin/medida/screens/AdminMedidas";
import Home from "../module/admin/categoria/components/Home";
import RouterAdmin from "./RouterAdmin";
import AdminCategorias from "../module/admin/categoria/screen/AdminCategorias";
const RouterMain = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/auth" element={<AdminCategoria />} />
        <Route path="/admin/*" element={<RouterAdmin />}>
          <Route path="categorias" element={<AdminCategorias />} />
          <Route path="marcas" element={<Home />} />
          <Route path="medidas" element={<Home />} />
        </Route>
        <Route path="/vendedor" element={<AdminMedidas />} />
      </Routes>
    </Router>
  );
};

export default RouterMain;
