import React, { useEffect, useState } from 'react'
import SideBar from '../../categoria/components/SideBar';
import UserTabla from '../components/UserTabla';
import UserFormulario from '../components/UserFormulario';
import { getUsers } from '../../../../services/user';

const AdminUsers = () => {
    const [dato, setDato] = useState([]);
    const [modo, setModo] = useState("crear");
    const [marca, setMarca] = useState({});
    const [loading, setLoading] = useState(true);

    const obtenerUser = () => {
        getUsers().then((respuesta) => {
          setDato(respuesta);
        });
        setLoading(false);
      };
      useEffect(() => {
        obtenerUser();
      }, []);
  return (
        <>
        <SideBar/>
         <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <UserFormulario
                  dato={dato}
                  obtenerUser={obtenerUser}
                  modo={modo}
                  setModo={setModo}
                  marca={marca}
                  setMarca={setMarca}
                />
              </div>
            </div>
    
            <div className="row justify-content-center mt-4">
              <div className="col">
                <UserTabla
                  dato={dato}
                  obtenerUser={obtenerUser}
                  modo={modo}
                  setModo={setModo}
                  marca={marca}
                  setMarca={setMarca}
                  loading={loading}
                />
              </div>
            </div>
          </div>
          </>)
    };
    
    export default AdminUsers;
    