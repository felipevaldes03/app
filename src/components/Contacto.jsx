import React from 'react';
import { FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Contacto({ contacto, handelEliminar }) {
  return (
    <div className="fondoCarta mx-2 my-3"> 
      <div className="card border border-primary rounded" style={{ width: "18rem" }}> 
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Contacto</h5> 
          <FaTimes className="icon" onClick={() => handelEliminar(contacto.id)} />
        </div>
        <div className="card-body text-center">
          <div className="imagen bg-dark text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "100px", height: "100px" }}>
            Imagen
          </div>
          <h5 className="card-title">{contacto.nombre}</h5>
          <p className="card-text">{contacto.telefono}</p>
          <p className="card-text">{contacto.correo}</p>
        </div>
      </div>
    </div>
  );
}
