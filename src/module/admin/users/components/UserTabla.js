import React from "react";
// import Swal from "sweetalert2";
// import { deleteMarca } from "../../../../services/Marca";
import CategoriaCargando from "../../../admin/categoria/components/CategoriaCargando";
const UserTabla = ({
  dato,
  obtenerMarca,
  modo,
  setModo,
  marca,
  setMarca,
  loading,
}) => {
  // const handleDelete = (objDato) => {
    // console.log(objDato);
    // deleteMarca(objDato.id).then((resp) => {
    //   console.log(resp);
    //   // if (resp.id) {
    //   Swal.fire({
    //     position: "center",
    //     icon: "error",
    //     title: "Eliminado correctamente",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
    //   obtenerMarca();
    //   // setLoading(false)
    //   // }
    // });
  // };
  // const handleUpdate = (dato) => {
  //   setModo("editar");
  //   setMarca(dato);
  // };
  return (
    <div className="row mt-4">
      <div className="col bor">
        <div className="card shadow">
          <div className="card-body">
            <h2>tabla de Usuarios</h2>
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
                      <strong>Nro</strong>
                    </th>
                    <th>
                      <strong>DNI</strong>
                    </th>
                    <th>
                      <strong>NOMBRE</strong>
                    </th>
                    <th>
                      <strong>ROL</strong>
                    </th>
                    <th>
                      <strong>CELULAR</strong>
                    </th>
                    <th>
                      <strong>ESTADO</strong>
                    </th>
                    <th>
                      <strong>ACCIONES</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dato.map((objDato, index) => {
                    return (
                      <tr key={objDato.id}>
                        <td>{index + 1}</td>
                        <td>{objDato.dni}</td>
                        <td>{objDato.nombre}</td>
                        <td>{objDato.nombreRol}</td>
                        <td>{objDato.celular}</td>
                        <td>{objDato.estado}</td>
                        <td>
                          <button
                            className="btn btn-outline-warning"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={() => {
                              // handleUpdate(objDato);
                            }}
                          >
                            <i class="fas fa-pen-square"></i>
                          </button>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => {
                              // handleDelete(objDato);
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

export default UserTabla;
