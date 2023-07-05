import React, { useEffect, useState } from "react";
import { postCategoria, putCategoria } from "../../../../services/categoria";
import Swal from "sweetalert2";

const CategoriaFormulario = ({
  dato,
  obtenerCategoria,
  modo,
  setModo,
  categ,
  setCateg,
}) => {
  const [categoria, setCategoria] = useState({
    nombre: "",
    descripcion: "",
  });
  const [error, setError] = useState(false);

  const { nombre, descripcion } = categoria;
  useEffect(() => {
    if (modo === "editar") {
      setCategoria(categ);
    }
  }, [categ, modo]);

  const handleChange = ({ target: { name, value } }) => {
    setCategoria({
      ...categoria,
      [name]: value,
    });
    setError(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const buscar = dato.find((objDato) => objDato.nombre === nombre);
    if (buscar) {
      setError(true);
      return;
    }
    setError(false);

    if (nombre.length <= 20 && descripcion.length <= 20) {
      if (modo === "crear") {
        postCategoria(categoria).then((rpta) => {
          if (rpta.id) {
            setCategoria({
              nombre: "",
              descripcion: "",
            });
            obtenerCategoria();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Creado Exitosamente",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      } else {
        putCategoria(categoria).then(() => {
          if (categoria.id) {
            setCategoria({
              nombre: "",
              descripcion: "",
            });
            obtenerCategoria();
            setModo("crear");
            setCateg({});
            Swal.fire({
              icon: "success",
              title: "Registro correctamente actualizado",
              timer: 1500,
              position: "center",
              showConfirmButton: false,
            });
          }
        });
      }
    } else {
      console.log("datos muy largos");
      setError(true);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <i class="fa fa-plus"></i>
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5" id="staticBackdropLabel">
                Crear Categoria
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="shadow mt-4 borde" onSubmit={handleSubmit}>
                <div className=" form-floating mb-3">
                  <input
                    type="text"
                    className="form-control "
                    name="nombre"
                    placeholder="Nombre"
                    onChange={handleChange}
                    value={nombre}
                    id="inputNombre"
                  />
                  <label htmlFor="inputNombre" className="form-label">
                    Nombre Categoria
                  </label>
                  {error ? (
                    <small className=" text-danger">categoria dublicada</small>
                  ) : null}
                </div>

                <div className=" form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="descripcion"
                    placeholder="Descripcion"
                    onChange={handleChange}
                    value={descripcion}
                    id="inputDescripcion"
                  />
                  <label htmlFor="inputDescripcion" className="form-label">
                    Descripcion Categoria
                  </label>
                </div>
                {nombre !== "" && descripcion !== "" ? (
                  <button className="btn btn-primary mr-3">
                    {modo === "crear" ? <>Crear</> : <>Guardar Cambios</>}
                  </button>
                ) : (
                  <button className="btn btn-success mr-3" disabled>
                    Crear
                  </button>
                )}
                <button type="button" className="btn btn-danger mt" data-bs-dismiss="modal">cerrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriaFormulario;
