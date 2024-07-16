import React, { useState } from "react";
import { FaWindowClose, FaRegUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ModalForm({ handelModal, handelsubmit }) {
  const [inputValues, setInputValues] = useState({
    id: Math.random(1),
    nombre: "",
    telefono: "",
    correo: ""
  });

  const handelchange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const guardarDatos = (e) => {
    e.preventDefault();

    if (inputValues.nombre === "") {
      return toast("Por favor ingrese el nombre.", {
        duration: 2000,
        position: "top-center",
      });
    }
    if (inputValues.telefono === "") {
      return toast("Por favor ingrese el numero de telefono", {
        duration: 2000,
        position: "top-center",
      });
    }
    if (inputValues.telefono.length !== 9) {
      return toast("El numero de telefono debe tener 9 digitos", {
        duration: 2000,
        position: "top-center",
      });
    }
    if (inputValues.correo === "") {
      return toast("Por favor ingrese el correo electronico", {
        duration: 2000,
        position: "top-center",
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputValues.correo)) {
      return toast("Por favor ingrese un correo electronico valido", {
        duration: 2000,
        position: "top-center",
      });
    }

    handelsubmit(inputValues);
    handelModal(false);
    setInputValues({
      id: Math.random(1),
      nombre: "",
      telefono: "",
      correo: ""
    });
  };

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: '#00000052' }}>
      <Toaster />
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <FaWindowClose onClick={handelModal} className="icon" />
          </div>
          <div className="modal-body">
            <h2>Registra tu contacto</h2>
            <form onSubmit={guardarDatos}>
              <div className="mb-3">
                <label className="form-label">
                  <FaRegUser />
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    placeholder="Ingrese el nombre"
                    value={inputValues.nombre}
                    onChange={handelchange}
                  />
                </label>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  <FaPhoneAlt />
                  <input
                    type="text"
                    className="form-control"
                    name="telefono"
                    placeholder="Ingrese el telefono"
                    value={inputValues.telefono}
                    onChange={handelchange}
                  />
                </label>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  <FaEnvelope />
                  <input
                    type="email"
                    className="form-control"
                    name="correo"
                    placeholder="Ingrese el correo electronico"
                    value={inputValues.correo}
                    onChange={handelchange}
                  />
                </label>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
