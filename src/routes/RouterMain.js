import React from "react";
import Home from "../screen/Home";
import CategoriaPri from "../screen/CategoriaPrin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const RouterMain = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categoria">
                Categoria
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route
          path="/categoria"
          element={<CategoriaPri></CategoriaPri>}
        ></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </Router>
  );
};

export default RouterMain;
