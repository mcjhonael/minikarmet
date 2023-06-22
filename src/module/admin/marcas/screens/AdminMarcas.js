import React, { useEffect, useState } from "react";
import { getMarca } from "../../../../services/Marca";
import MarcaFormulario from "../components/MarcaFormulario";
import MarcaTabla from "../components/MarcaTabla";

const AdminMarcas = () => {
  const [dato, setDato] = useState([]);
  const [modo, setModo] = useState("crear");
  const [marca, setMarca] = useState({});
  const [loading, setLoading] = useState(true);

  const obtenerMarca = () => {
    getMarca().then((respuesta) => {
      setDato(respuesta);
    });
    setLoading(false);
  };
  useEffect(() => {
    obtenerMarca();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <MarcaFormulario
            dato={dato}
            obtenerMarca={obtenerMarca}
            modo={modo}
            setModo={setModo}
            marca={marca}
            setMarca={setMarca}
          />
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <MarcaTabla
            dato={dato}
            obtenerMarca={obtenerMarca}
            modo={modo}
            setModo={setModo}
            marca={marca}
            setMarca={setMarca}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminMarcas;
