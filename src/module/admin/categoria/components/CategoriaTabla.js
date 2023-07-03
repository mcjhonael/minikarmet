import React from "react";
import { deleteCategoria } from "../../../../services/categoria";
import CategoriaCargando from "../components/CategoriaCargando";
import Swal from "sweetalert2";
import MaterialTable from "material-table"

const CategoriaTabla = ({
  dato,
  obtenerCategoria,
  modo,
  setModo,
  categ,
  setCateg,
  loading,
}) => {

  const columnas=[
    {
      "title":"Artista",
      

    }
  ]

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
      <div className="col">
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

export default CategoriaTabla;
