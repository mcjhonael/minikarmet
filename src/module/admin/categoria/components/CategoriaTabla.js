import React from "react";
import Categoria from "./CategoriaRegistro";

const CategoriaTabla = ({
  dato,
  obtenerCategoria,
  modo,
  setModo,
  categ,
  setCateg,
}) => {
  return (
    <table
      className="table table-hover table-bordered justify-content-center"
      border="1px"
    >
      <thead>
        <tr>
          <th>
            <strong>ID</strong>
          </th>
          <th>
            <strong>Nombre</strong>
          </th>
          <th>
            <strong>Descripcion</strong>
          </th>
          <th>
            <strong>Acciones</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        {dato.map((objDato, index) => {
          return (
            <Categoria
              objDato={objDato}
              index={index}
              key={index}
              obtenerCategoria={obtenerCategoria}
              modo={modo}
              setModo={setModo}
              categ={categ}
              setCateg={setCateg}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default CategoriaTabla;
