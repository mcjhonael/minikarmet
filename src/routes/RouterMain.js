import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminCategorias from "../module/admin/categoria/screen/AdminCategorias";
import AdminMedidas from "../module/admin/medida/screens/AdminMedidas";
import AdminMarcas from "../module/admin/marcas/screens/AdminMarcas";
import AdminProducto from "../module/admin/producto/screens/AdminProducto";
import AuthLogin from "../module/auth/AuthLogin";
import RouteAuth from "./RouteAuth";
import RutaPrivada from "./RutaPrivada";
import RouterAdmin from "./RouterAdmin";

import AdminVenta from "../module/admin/venta/screen/AdminVenta";
import AdminCompra from "../module/admin/compra/screen/AdminCompra";
import AdminUsers from "../module/admin/users/screen/AdminUsers";

const RouterMain = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<AuthLogin />} />

          <Route path="/auth/*" element={<RouteAuth />}>
            <Route path="login" element={<AuthLogin />} />
            {/* <Route path="login" element={<Navigate to="login" />} />
            <Route path="register"/>
    <Route path="recover"/> */}
          </Route>

          <Route element={<RutaPrivada />}>
            <Route path="/admin" element={<RouterAdmin />} />
            <Route path="/admin/categorias" element={<AdminCategorias />} />
            <Route path="/admin/marcas" element={<AdminMarcas />} />
            <Route path="/admin/medidas" element={<AdminMedidas />} />
            <Route path="/admin/productos" element={<AdminProducto />} />
            <Route path="/admin/ventas" element={<AdminVenta />} />
            <Route path="/admin/compras" element={<AdminCompra />} />
            <Route path="/admin/users" element={<AdminUsers />} />
          </Route>
          <Route path="/vendedor" element={<AdminMedidas />} />
        </Routes>
    </Router>
  );
};

export default RouterMain;
