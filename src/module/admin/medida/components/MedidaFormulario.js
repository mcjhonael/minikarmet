import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { postMedida, putMedida } from "../../../../services/Medida";

const MedidaFormulario = ({
  dato,
  obtenerMedida,
  modo,
  setModo,
  medida,
  setMedida,
}) => {
  const [categoria, setCategoria] = useState({
    codigo: "",
    nombre: "",
  });
  const [error, setError] = useState(false);

  const { codigo, nombre } = categoria;
  useEffect(() => {
    if (modo === "editar") {
      setCategoria(medida);
    }
  }, [medida, modo]);

  const handleChange = ({ target: { name, value } }) => {
    setCategoria({
      ...categoria,
      [name]: value,
    });
    setError(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const buscar = dato.find((objDato) => objDato.codigo === codigo);
    if (buscar) {
      setError(true);
      return;
    }
    setError(false);

    if (modo === "crear") {
      postMedida(categoria).then((rpta) => {
        if (rpta.id) {
          setCategoria({
            codigo: "",
            nombre: "",
          });
          obtenerMedida();
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
      putMedida(categoria).then(() => {
        if (categoria.id) {
          setCategoria({
            codigo: "",
            nombre: "",
          });
          obtenerMedida();
          setModo("crear");
          setMedida({});
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
    <form className="shadow mt-4 borde" onSubmit={handleSubmit}>
      <h2> Crear Medida</h2>
      <div className=" form-floating mb-3">
        <input
          type="text"
          className="form-control "
          name="codigo"
          placeholder="codigo"
          onChange={handleChange}
          value={codigo}
          id="inputCodigo"
        />
        <label htmlFor="inputCodigo" className="form-label">
          Codigo
        </label>
        {error ? (
          <small className=" text-danger">medida dublicada</small>
        ) : null}
      </div>

      <div className=" form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name="nombre"
          onChange={handleChange}
          value={nombre}
          id="inputNombre"
        />
        <label htmlFor="inputNombre" className="form-label">
          Nombre
        </label>
      </div>
      {codigo !== "" && nombre !== "" ? (
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

export default MedidaFormulario;
