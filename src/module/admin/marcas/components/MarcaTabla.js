import React from "react";
import Swal from "sweetalert2";
import { deleteMarca } from "../../../../services/Marca";
import CategoriaCargando from "../../../admin/categoria/components/CategoriaCargando"
const MarcaTabla = ({
  dato,
  obtenerMarca,
  modo,
  setModo,
  marca,
  setMarca,
  loading,
}) => {
  const handleDelete = (objDato) => {
    console.log(objDato);
    deleteMarca(objDato.id).then((resp) => {
      console.log(resp);
      // if (resp.id) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Eliminado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        obtenerMarca();
        // setLoading(false)
      // }
    });
  };
  const handleUpdate = (dato) => {
    setModo("editar");
    setMarca(dato);
  };
  return (
    <div className="row mt-4">
      <div className="col">
        <div className="card shadow">
          <div className="card-body">
            <h2>tabla de Marcas</h2>
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
                        <td>
                          <button
                            className="btn btn-outline-warning"
                            onClick={() => {
                              handleUpdate(objDato);
                            }}
                          >
                            Actualizar
                          </button>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => {
                              handleDelete(objDato);
                            }}
                          >
                            Eliminar
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

export default MarcaTabla;
