import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { postMarca, putMarca } from "../../../../services/Marca";

const MarcaFormulario = ({
  dato,
  obtenerMarca,
  modo,
  setModo,
  marca,
  setMarca,
}) => {
  const [categoria, setCategoria] = useState({
    nombre: "",
  });
  const [error, setError] = useState(false);

  const { nombre } = categoria;
  useEffect(() => {
    if (modo === "editar") {
      setCategoria(marca);
    }
  }, [marca, modo]);

  const handleChange = ({ target: { name, value } }) => {
    setCategoria({
      ...categoria,
      [name]: value,
    });
    setError(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const buscar = dato.find((objDato) => objDato.nombre === nombre);
    // if (buscar) {
    //   setError(true);
    //   return;
    // }
    setError(false);

    if (modo === "crear") {
      postMarca(categoria).then((rpta) => {
        if (rpta.id) {
          setCategoria({
            nombre: "",
          });
          obtenerMarca();
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
      putMarca(categoria).then(() => {
        if (categoria.id) {
          setCategoria({
            nombre: "",
          });
          obtenerMarca();
          setModo("crear"); 
          setMarca({});
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
                Crear Marca
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
                <h2> Crear Marca</h2>
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
                    Nombre marca
                  </label>
                  {error ? (
                    <small className=" text-danger">marca dublicada</small>
                  ) : null}
                </div>
                {nombre !== "" ? (
                  <button className="btn btn-primary">
                    {modo === "crear" ? <>Crear</> : <>Guardar Cambios</>}
                  </button>
                ) : (
                  <button className="btn btn-success" disabled>
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

export default MarcaFormulario;
