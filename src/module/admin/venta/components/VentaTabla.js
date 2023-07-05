import React, { useEffect, useState } from "react";
import CategoriaCargando from "../../categoria/components/CategoriaCargando";
import { getVentas } from "../../../../services/venta";
import DetalleVentaTabla from "./DetalleVentaTabla";

const VentaTabla = ({ loading }) => {
  const [venta, setVenta] = useState([]);

  const reporteVentas = () => {
    getVentas().then((res) => {
      console.log(res);
      setVenta(res);
    });
  };

  useEffect(() => {
    reporteVentas();
  }, []);

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <h2>tabla de ventas</h2>
              {loading ? (
                <CategoriaCargando />
              ) : (
                <table
                  className="table col-md-10 table-hover table-bordered justify-content-center"
                  border="1px"
                >
                  <thead>
                    <tr>
                      <th>
                        <strong>Nro</strong>
                      </th>
                      <th>
                        <strong>descripcion</strong>
                      </th>
                      <th>
                        <strong>tipo documento</strong>
                      </th>
                      <th>
                        <strong>Nro documento</strong>
                      </th>
                      <th>
                        <strong>nombre cliente</strong>
                      </th>
                      <th>
                        <strong>monto total</strong>
                      </th>
                      <th>
                        <strong>fecha</strong>
                      </th>
                      <th>
                        <strong>Acciones</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {venta.map((objDato,index) => {
                      return (
                        <tr key={objDato.id}>
                          <td>{index+1}</td>
                          <td>{objDato.motivo}</td>
                          <td>{objDato.tipoDocumento}</td>
                          <td>{objDato.numeroDocumento}</td>
                          <td>{objDato.nombreCliente}</td>
                          <td>{objDato.montoPagoCliente}</td>
                          <td>{objDato.created_at.substring(0, 10)}</td>
                          <td>
                            <DetalleVentaTabla
                              venta_inventarios={objDato.venta_inventarios}
                            />
                            <button className="btn btn-outline-danger">
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
    </>
  );
};

export default VentaTabla;
