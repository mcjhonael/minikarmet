import React, { useEffect, useState } from "react";
import { getCategorias } from "../../../../services/categoria";
import CategoriaFormulario from "../components/CategoriaFormulario";
import CategoriaTabla from "../components/CategoriaTabla";
import CategoriaCargando from "../components/CategoriaCargando"
const AdminCategoria= () => {
  const [dato, setDato] = useState([]);
  const [modo, setModo] = useState("crear");
  const [categ, setCateg] = useState({});

  const obtenerCategoria = () => {
    getCategorias().then((respuesta) => {
      setDato(respuesta);
    });
  };
  useEffect(() => {
    obtenerCategoria();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <CategoriaFormulario
            dato={dato}
            obtenerCategoria={obtenerCategoria}
            modo={modo}
            setModo={setModo}
            categ={categ}
            setCateg={setCateg}
          />
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
        <CategoriaCargando/>
          <CategoriaTabla
            dato={dato}
            obtenerCategoria={obtenerCategoria}
            modo={modo}
            setModo={setModo}
            categ={categ}
            setCateg={setCateg}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminCategoria;
