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
    const buscar = dato.find((objDato) => objDato.nombre === nombre);
    if (buscar) {
      setError(true);
      return;
    }
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
      putMarca(categoria).then(()=>{
        if (categoria.id) {
            setCategoria({
              nombre: ""
            })
            obtenerMarca()
            setModo("crear")
            setMarca({})
            Swal.fire({
              icon: "success",
              title: "Registro correctamente actualizado",
              timer: 1500,
              position: "center",
              showConfirmButton: false,
            });
        }
      })
    }
  };

  return (
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
    </form>
  );
};

export default MarcaFormulario;
