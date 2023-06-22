import React from "react";
import { deleteCategorias } from "../services/services";
import Swal from "sweetalert2";

const Categoria = ({
  objDato,
  index,
  obtenerCategoria,
  modo,
  setModo,
  categ,
  setCateg,
}) => {
  // console.log(objDato.estado);

  const handleClick = () => {
    console.log(objDato.id);
    deleteCategorias(objDato.id).then((resp) => {
      console.log(resp);
      if (resp.id) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Eliminado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        obtenerCategoria();
      }
    });
  };
  const handleUpdate = (objDato) => {
    setModo("editar");
    setCateg(objDato);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{objDato.nombre}</td>
      <td>{objDato.descripcion}</td>
      <td>
        <button className="btn btn-outline-warning" onClick={()=>{
          handleUpdate(objDato)
        }}>
          Actualizar
        </button>
        <button className="btn btn-outline-danger" onClick={handleClick}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Categoria;
