import React from "react";
import CategoriaCargando from "../../../admin/categoria/components/CategoriaCargando"
import Swal from "sweetalert2";
import { deleteMedida } from "../../../../services/Medida";

const MedidaTabla = ({
  dato,
  obtenerMedida,
  modo,
  setModo,
  medida,
  setMedida,
  loading,
}) => {
  const handleDelete = (objDato) => {
    console.log(objDato);
    deleteMedida(objDato.id).then((resp) => {
      console.log(resp);
      // if (resp.id) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Eliminado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        obtenerMedida();
        // setLoading(false)
      // }
    });
  };
  const handleUpdate = (dato) => {
    setModo("editar");
    setMedida(dato);
  };
  return (
    <div className="row mt-4">
      <div className="col bor">
        <div className="card shadow">
          <div className="card-body">
            <h2>tabla de medida</h2>
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
                      <strong>codigo</strong>
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
                        <td>{objDato.codigo}</td>
                        <td>{objDato.nombre}</td>
                        <td>
                          <button
                            className="btn btn-outline-warning"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={() => {
                              handleUpdate(objDato);
                            }}
                          >
                          <i class="fas fa-pen-square"></i>

                          </button>
                          <button
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

export default MedidaTabla;
