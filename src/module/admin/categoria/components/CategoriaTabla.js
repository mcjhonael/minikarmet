import React from "react";
import { deleteCategoria } from "../../../../services/categoria";
import CategoriaCargando from "../components/CategoriaCargando";
import CategoriaFormulario from "../components/CategoriaFormulario";
import Swal from "sweetalert2";

const CategoriaTabla = ({
  dato,
  obtenerCategoria,
  modo,
  setModo,
  categ,
  setCateg,
  loading,
}) => {
  const handleDelete = (objDato) => {
    // console.log(objDato);
    deleteCategoria(objDato.id).then((resp) => {
      console.log(resp);
      // if (resp.id) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Eliminado correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
      obtenerCategoria();
      // setLoading(false)
      // }
    });
  };
  const handleUpdate = (dato) => {
    setModo("editar");
    setCateg(dato);
  };
  return (
    <div className="row mt-4">
      <div className="col bor">
        <div className="card shadow">
          <div className="card-body">
            <h2>tabla de categoria</h2>
            {loading ? (
              <CategoriaCargando />
            ) : (
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
                      <tr key={objDato.id}>
                        <td>{index + 1}</td>
                        <td>{objDato.nombre}</td>
                        <td>{objDato.descripcion}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-warning"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={() => {
                              handleUpdate(objDato);
                            }}
                          >
                            <i class="fas fa-pen-square"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => {
                              handleDelete(objDato);
                            }}
                          >
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriaTabla;
