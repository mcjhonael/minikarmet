import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminCategorias from "../module/admin/categoria/screen/AdminCategorias";
import AdminMedidas from "../module/admin/medida/screens/AdminMedidas";
import Home from "../module/admin/categoria/components/Home";
import AdminMarcas from "../module/admin/marcas/screens/AdminMarcas";
import RouterAdmin from "./RouterAdmin";
const RouterMain = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Home />} />
        <Route path="/admin/*" element={<RouterAdmin />}>
          <Route path="categorias" element={<AdminCategorias />} />
          <Route path="marcas" element={<AdminMarcas />} />
          <Route path="medidas" element={<AdminMedidas />} />
        </Route>
        <Route path="/vendedor" element={<AdminMedidas />} />
      </Routes>
    </Router>
  );
};

export default RouterMain
