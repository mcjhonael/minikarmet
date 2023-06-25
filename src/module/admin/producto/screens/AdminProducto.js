import React, { useEffect, useState } from "react";
import { getProducto } from "../../../../services/producto";
import ProductoFormulario from "../components/ProductoFormulario";
import ProductoTabla from "../components/ProductoTabla";


const AdminProducto = () => {
  const [dato, setDato] = useState([]);
  const [modo, setModo] = useState("crear");
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  const obtenerProducto = () => {
    getProducto().then((respuesta) => {
      // console.log(respuesta);
      setDato(respuesta);
    });
    setLoading(false);
  };
  useEffect(() => {
    obtenerProducto();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <ProductoFormulario
            dato={dato}
            obtenerProducto={obtenerProducto}
            modo={modo}
            setModo={setModo}
            producto={producto}
            setProducto={setProducto}
          />
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <ProductoTabla
            dato={dato}
            obtenerProducto={obtenerProducto}
            modo={modo}
            setModo={setModo}
            producto={producto}
            setProducto={setProducto}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProducto;
