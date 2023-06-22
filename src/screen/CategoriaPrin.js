import React, { useEffect, useState } from "react";
import Categorias from "./TablaCategorias";
import CrearCategoria from "./FormCategoria";
import { getCategorias } from "../services/services";

const CategoriaPri= () => {
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
          <CrearCategoria
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
          <Categorias
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

export default CategoriaPri;
