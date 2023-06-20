import React from "react";
import "./style/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Categorias from "./screen/Categorias";
import CrearCategoria from "./screen/CrearCategoria";


const App = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <CrearCategoria />
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <Categorias />
        </div>
      </div>
    </div>
  );
};

export default App;
