import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { postUsers, putUsers } from "../../../../services/user";
import { getRol } from "../../../../services/rol";

const UserFormulario = (  dato,
  obtenerUser,
  modo,
  setModo,
  marca,
  setMarca,) => {
  const [user, setUser] = useState({
    dni:"",
    nombre: "",
    celular:"",
    role_id:0,
    password:""

  });
  const [error, setError] = useState(false);
const [rol,setRol]=useState([])

useEffect(() => {
  getRol().then((resp)=>{
    setRol(resp)
  })
}, [])



  const { dni,nombre,celular,role_id,password } = user;
  
  useEffect(() => {
    if (modo === "editar") {
      setUser(marca);
    }
  }, [marca, modo]);

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
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
      postUsers(user).then((rpta) => {
        console.log(rpta);
        if (rpta.id) {
          setUser({
            dni:"",
            nombre: "",
            celular:"",
            role_id:0,
            password:""
          });
          // obtenerMarca();
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
      putUsers(user).then(() => {
        if (user.id) {
          setUser({
            nombre: "",
          });
          obtenerUser();
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
                Crear Usuario
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
                <h2> Crear Usuario</h2>



                <div className=" form-floating mb-3">
                  <input
                    type="text"
                    className="form-control "
                    name="dni"
                    placeholder="dni"
                    onChange={handleChange}
                    value={dni}
                    id="inputDni"
                  />
                  <label htmlFor="inputDni" className="form-label">
                    DNI
                  </label>
                  {error ? (
                    <small className=" text-danger">usuario dublicada</small>
                  ) : null}
                </div>



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
                    Nombre
                  </label>
                  {error ? (
                    <small className=" text-danger">usuario dublicada</small>
                  ) : null}
                </div>


                <div className=" form-floating mb-3">
                  <input
                    type="text"
                    className="form-control "
                    name="celular"
                    placeholder="celular"
                    onChange={handleChange}
                    value={celular}
                    id="inputCelular"
                  />
                  <label htmlFor="inputCelular" className="form-label">
                    celular
                  </label>
                  {error ? (
                    <small className=" text-danger">usuario dublicada</small>
                  ) : null}
                </div>

                <div className="row">
                <div className="col-md-4">
                  <label htmlFor="inputRol" className="form-label">
                    Categoria
                  </label>
                  <select
                    id="inputRol"
                    className="form-select text-center"
                    name={"role_id"}
                    value={role_id}
                    onChange={handleChange}
                  >
                    <option value="0">-- Seleccione --</option>
                    {rol.map((objRol) => {
                      // console.log(objRol);
                      return (
                        <option key={objRol.id} value={objRol.id}>
                          {objRol.nombre}
                        </option>
                      );
                    })}
                  </select>
                </div>
                </div>






                <div className=" form-floating mb-3">
                <input
                  type="password"
                  className="form-control "
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  value={password}
                  id="inputPassword"
                />
                <label htmlFor="inputPassword" className="form-label">
                  password
                </label>
                {error ? (
                  <small className=" text-danger">usuario dublicada</small>
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
                <button
                  type="button"
                  className="btn btn-danger mt"
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

export default UserFormulario;
