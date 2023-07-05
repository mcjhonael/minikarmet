import React from "react";
import Swal from "sweetalert2";
import CategoriaCargando from "../../categoria/components/CategoriaCargando";
import { deleteProducto } from "../../../../services/producto";

const ProductoTabla = ({
  dato,
  obtenerProducto,
  setModo,
  producto,
  setProducto,
  setLoading,
  loading,
}) => {
  const handleDelete = (objDato) => {
    console.log(` mi dato `);
    console.log(objDato.id);
    deleteProducto(objDato.id).then((resp) => {
      console.log(resp);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Eliminado correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
      obtenerProducto();
      setLoading(false);
    });
  };
  const handleUpdate = (dato) => {
    console.log(dato);
    setModo("editar");
    setProducto(dato);
  };
  return (
    <div className="row mt-4 text-center">
      <div className="col bor">
        <div className="card shadow">
          <div className="card-body">
            <h2>Tabla de producto</h2>
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
                      <strong>precio venta</strong>
                    </th>
                    <th>
                      <strong>categoria</strong>
                    </th>
                    <th>
                      <strong>marca</strong>
                    </th>
                    <th>
                      <strong>medida</strong>
                    </th>
                    <th>
                      <strong>Acciones</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dato.map((objDato, index) => {
                    // console.log(objDato);
                    return (
                      <tr key={objDato.id}>
                        <td>{index + 1}</td>
                        <td>{objDato.nombre}</td>
                        <td>{objDato.descripcion}</td>
                        <td>{objDato.precioVenta}</td>
                        <td>{objDato.categoria.nombre}</td>
                        <td>{objDato.marca.nombre}</td>
                        <td>{objDato.medida.nombre}</td>
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

export default ProductoTabla;
