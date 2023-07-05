import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import RouterMain from "./routes/RouterMain";
import "./style/style.css";
import "./App.css";

const App = () => {
  return (
    <>
    <RouterMain />
      <div className="container-fluid">
      </div>
    </>
  );
};

export default App;
