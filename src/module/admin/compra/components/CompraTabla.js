import React, { useEffect, useState } from "react";
import CategoriaCargando from "../../categoria/components/CategoriaCargando";
import DetalleCompraTabla from "./DetalleCompraTabla";
import { getCompras } from "../../../../services/compra";

const CompraTabla = ({ loading }) => {
  const [compra, setCompra] = useState([]);

  const reporteCompras = () => {
    getCompras().then((res) => {
      console.log(res);
      setCompra(res);
    });
  };

  useEffect(() => {
    reporteCompras();
  }, []);

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <h2>tabla de compra</h2>
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
                        <strong>fecha</strong>
                      </th>
                      <th>
                        <strong>descripcion</strong>
                      </th>
                      <th>
                        <strong>tipo documento</strong>
                      </th>
                      <th>
                        <strong>Comprobante</strong>
                      </th>
                      <th>
                        <strong>Proveedor</strong>
                      </th>
                      <th>
                        <strong>monto total</strong>
                      </th>
                      <th>
                        <strong>Acciones</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {compra.map((objDato, index) => {
                      return (
                        <tr key={objDato.id}>
                          <td>{index + 1}</td>
                          <td>{objDato.created_at.substring(0, 10)}</td>
                          <td>{objDato.motivo}</td>
                          <td>{objDato.tipoComprobante}</td>
                          <td>
                            {objDato.serieComprobante}{" "}
                            {objDato.numeroComprobante}
                          </td>
                          <td>{objDato.nombreProveedor}</td>
                          <td>{objDato.montoTotal}</td>
                          <td>
                            <DetalleCompraTabla
                              compra_inventarios={objDato.compra_inventarios}
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

export default CompraTabla;
