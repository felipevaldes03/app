import React from 'react'
import {FaRegPlusSquare} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navegacion({ handelModal }) {
  return (
    <nav className="navbar navbar-light bg-white px-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-primary ">App Contactos</span>
        <button className="btn btn-primary" onClick={handelModal}>
          <FaRegPlusSquare className="icon" />
        </button>
      </div>
    </nav>
  );
}
