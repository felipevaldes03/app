import React from 'react';
import Contacto from './Contacto';

export default function Contactos({ contactos, handelEliminar }) {
  return (
    <div className="row">
      {
        contactos.map(contacto => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={contacto.id}>
            <Contacto contacto={contacto} handelEliminar={handelEliminar} />
          </div>
        ))
      }
    </div>
  );
}


