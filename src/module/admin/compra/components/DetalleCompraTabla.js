import React from "react";

const DetalleVentaTabla = ({ compra_inventarios }) => {
  console.log(compra_inventarios);
  let monto = 0;
  return (
    <td>
      <button
        className="btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <i class="fa-sharp fa-solid fa-eye"></i>
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
                Detalle de Venta
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
                      <strong>Producto</strong>
                    </th>
                    <th>
                      <strong>Cantidad</strong>
                    </th>
                    <th>
                      <strong>Precio Unitario</strong>
                    </th>
                    <th>
                      <strong>Totales</strong>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {compra_inventarios.map((objCompra,index) => {
                    monto =
                      monto +
                      objCompra.cantidad * objCompra.precio;
                    return (
                      <tr key={objCompra.id}>
                        <td>{index+1}</td>
                        <td>{objCompra.inventario.producto.nombre}</td>
                        <td>{objCompra.cantidad}</td>
                        <td>{objCompra.precio}</td>
                        <td>
                          {
                            (objCompra.cantidad *
                              objCompra.precio).toFixed(2)
                          }
                        </td>
                      </tr>
                    );
                  })}
                  </tbody>
                  <tfoot>
                    <tr >
                    <td colspan="4"><strong>Monto Totales</strong> </td>
                    
                    
                    <td>{monto.toFixed(2)}</td>
                    </tr>
                  </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </td>
  );
};

export default DetalleVentaTabla;
