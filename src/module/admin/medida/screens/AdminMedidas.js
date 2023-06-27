import React, { useEffect, useState } from "react";
import {getMedida} from "../../../../services/Medida"
import MedidaFormulario from "../components/MedidaFormulario";
import MedidaTabla from "../components/MedidaTabla";

const AdminMedidas = () => {
  const [dato, setDato] = useState([]);
  const [modo, setModo] = useState("crear");
  const [medida, setMedida] = useState({});
  const [loading, setLoading] = useState(true);

  const obtenerMedida = () => {
    getMedida().then((respuesta) => {
      setDato(respuesta);
    });
    setLoading(false);
  };
  useEffect(() => {
    obtenerMedida();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <MedidaFormulario
            dato={dato}
            obtenerMedida={obtenerMedida}
            modo={modo}
            setModo={setModo}
            medida={medida}
            setMedida={setMedida}
          />
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <MedidaTabla
            dato={dato}
            obtenerMedida={obtenerMedida}
            modo={modo}
            setModo={setModo}
            medida={medida}
            setMedida={setMedida}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminMedidas;
