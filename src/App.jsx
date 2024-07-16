import React, { useState, useEffect } from 'react';
import ModalForm from './components/ModalForm';
import Navegacion from './components/Navegacion';
import toast, { Toaster } from "react-hot-toast";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactos from './components/Contactos';

export default function App() {
  const [isModal, setIsModal] = useState(false);
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    const storedContactos = JSON.parse(localStorage.getItem('contactos'));
    if (storedContactos) {
      setContactos(storedContactos);
    }
  }, []);

  const handelModal = () => setIsModal(!isModal);

  const handelsubmit = (valor) => {
    toast("Contacto guardado", {
      duration: 2000,
      position: "top-center",
    });
    const newContactos = [...contactos, valor];
    setContactos(newContactos);
    localStorage.setItem('contactos', JSON.stringify(newContactos));
  };

  const handelEliminar = (id) => {
    const nuevoContactos = contactos.filter((contacto) => contacto.id !== id);
    toast("Contacto Eliminado", {
      duration: 2000,
      position: "top-center",
    });
    setContactos(nuevoContactos);
    localStorage.setItem('contactos', JSON.stringify(nuevoContactos));
  };

  return (
    <div>
      <Toaster />
      <Navegacion handelModal={handelModal} />
      {isModal && <ModalForm handelModal={handelModal} handelsubmit={handelsubmit} />}
      <div className="container">
        <Contactos contactos={contactos} handelEliminar={handelEliminar} />
      </div>
    </div>
  );
}
