import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { postProducto, putProducto } from "../../../../services/producto";
import { getCategoria } from "../../../../services/categoria";
import { getMarca } from "../../../../services/Marca";
import { getMedida } from "../../../../services/Medida";
const ProductoFormulario = ({
  dato,
  obtenerProducto,
  modo,
  setModo,
  producto,
  setProducto,
}) => {
  const [catego, setCatego] = useState([]);
  const [marc, setMarc] = useState([]);
  const [medid, setMedid] = useState([]);

  const [productos, setProductos] = useState({
    nombre: "",
    descripcion: "",
    precioVenta: 0,
    categoria_id: "",
    marca_id: "",
    medida_id: "",
  });

  const [error, setError] = useState(false);
  const {
    nombre,
    descripcion,
    precioVenta,
    categoria_id,
    marca_id,
    medida_id,
  } = productos;

  useEffect(() => {
    getCategoria().then((resp) => {
      setCatego(resp);
    });
    getMarca().then((resp) => {
      setMarc(resp);
    });
    getMedida().then((resp) => {
      setMedid(resp);
    });
  }, []);

  useEffect(() => {
    if (modo === "editar") {
      setProductos(producto);
    }
  }, [producto, modo]);

  const handleChange = ({ target: { name, value } }) => {
    setProductos({
      ...productos,
      [name]: value,
    });
    // setCatego({});
    setError(false);
  };
  const handleSubmit = (e) => {
    console.log(productos);
    e.preventDefault();
    const buscar = dato.find((objDato) => objDato.nombre === nombre);
    if (buscar) {
      setError(true);
      return;
    }
    setError(false);

    if (modo === "crear") {
      postProducto(productos).then((rpta) => {
        // console.log(rpta);
        if (rpta.id) {
          setProductos({
            nombre: "",
            descripcion: "",
            precioVenta: 0,
            categoria_id: "",
            marca_id: "",
            medida_id: "",
          });
          obtenerProducto();
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
      putProducto(productos).then(() => {
        if (productos.id) {
          setProductos({
            nombre: "",
            descripcion: "",
            precioVenta: 0,
            categoria_id: "",
            marca_id: "",
            medida_id: "",
          });
          obtenerProducto();
          setModo("crear");
          setProducto({});
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
                Crear Producto
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                className="shadow mt-4 borde text-center"
                onSubmit={handleSubmit}
              >
                <div className=" form-floating mb-3">
                  <input
                    type="text"
                    className="form-control "
                    name="nombre"
                    onChange={handleChange}
                    value={nombre}
                    id="inputNombre"
                  />
                  <label htmlFor="inputNombre" className="form-label">
                    Nombre Producto
                  </label>
                  {error ? (
                    <small className=" text-danger">producto dublicada</small>
                  ) : (
                    ""
                  )}
                </div>

                <div className=" form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="descripcion"
                    onChange={handleChange}
                    id="inputDescripcion"
                    value={descripcion}
                  />
                  <label htmlFor="inputDescripcion" className="form-label">
                    Descripcion Producto
                  </label>
                </div>

                <div className=" form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    name="precioVenta"
                    onChange={handleChange}
                    value={precioVenta}
                    id="inputPrecioVenta"
                  />
                  <label htmlFor="inputPrecioVenta" className="form-label">
                    Precio Venta Producto
                  </label>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="inputCategoria" className="form-label">
                      Categoria
                    </label>
                    <select
                      id="inputCategoria"
                      className="form-select text-center"
                      name={"categoria_id"}
                      value={categoria_id}
                      onChange={handleChange}
                    >
                      <option value="0">-- Seleccione --</option>
                      {catego.map((objCatego) => {
                        // console.log(objCatego);
                        return (
                          <option key={objCatego.id} value={objCatego.id}>
                            {objCatego.nombre}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputMarca" className="form-label">
                      Marca
                    </label>
                    <select
                      id="inputMarca"
                      className="form-select text-center"
                      name="marca_id"
                      value={marca_id}
                      onChange={handleChange}
                    >
                      <option value="0">-- Seleccione --</option>
                      {marc.map((objMarc) => {
                        //   console.log(objMarc);
                        return (
                          <option key={objMarc.id} value={objMarc.id}>
                            {objMarc.nombre}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputMedida" className="form-label">
                      Medida
                    </label>
                    <select
                      id="inputMedida"
                      className="form-select text-center"
                      onChange={handleChange}
                      name="medida_id"
                      value={medida_id}
                    >
                      <option value="0">-- Seleccione --</option>
                      {medid.map((objMedid) => {
                        // console.log(objMedid.id);
                        return (
                          <option key={objMedid.id} value={objMedid.id}>
                            {objMedid.nombre}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                {nombre !== "" && descripcion !== "" && precioVenta !== "" ? (
                  <button className="btn btn-primary mt-4">
                    {modo === "crear" ? <>Crear</> : <>Guardar Cambios</>}
                  </button>
                ) : (
                  <button className="btn btn-success mt-4" disabled>
                    Crear
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-danger mt-4 mt"
                  data-bs-dismiss="modal"
                >
                  cerrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductoFormulario;
