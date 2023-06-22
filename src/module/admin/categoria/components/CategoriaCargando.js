import React from "react";

const CategoriaCargando = ({tipo="info", texto="Hola amiguitos"}) => {
  const clase=`alert alert-${tipo}`
  return (
    <div className={clase} role="alert">
      <h4 className="alert-heading">Cargando</h4>
      <p>
        <i className="fas fa-spinner fa-2x fa-spin"></i>
      </p>
      <p>{texto}</p>
    </div>
  );
};

export default CategoriaCargando;
