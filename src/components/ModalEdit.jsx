import React, { useEffect, useState } from "react";
//funcion de reservas by id y actualizars
import { getReservaById, actualizarReserva } from "../helpers/ReservaApi";
//fucnion de categorias
import { getCategorias } from "../helpers/CategoriaApi";

//sweet alert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//modal de react bootstrap
import Modal from "react-bootstrap/Modal";

const ModalEdit = ({ show, handleClose, cid }) => {
  const MySwal = withReactContent(Swal);

  //estados para reserva y categorias
  const [reserva, setReserva] = useState(null);
  const [categorias, setCategorias] = useState(null);

  //cuando se monta---------------------------------
  useEffect(() => {
    traerDatosDeReserva();
    traerCategorias();
  }, []);

  const traerDatosDeReserva = async () => {
    const resp = await getReservaById(cid);

    setReserva(resp.reserva);
  };

  const traerCategorias = async () => {
    const resp = await getCategorias();
    setCategorias(resp.categorias);
  };
  //------------------------------------------------

  const handleChange = (e) => {
    //Variable para el swich
    let valueCheck = false;

    //Manejar el switch
    if (e.target.name === "destacado") {
      //cambiar el estado del check
      if (e.target.checked) {
        valueCheck = true;
      } else {
        valueCheck = false;
      }
      // actualizamos el estado reserva
      setReserva({
        ...reserva,
        [e.target.name]: valueCheck,
      });
    } else {
      setReserva({
        ...reserva,
        [e.target.name]: e.target.value,
      });
    }
  };

  // -------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    //funcion actualizar
    await actualizarReserva(reserva._id, reserva);
    MySwal.fire("Reserva actualizada", "", "success");

    // cerrar el modal
    handleClose();
  };

  return (
    <>
      {/* la funcion show es propia del modal y le pasamos show desde TableReservas */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {reserva ? (
            <form onSubmit={handleSubmit}>
              <label className="fw-bold">Nombre</label>
              <input
                type="text"
                className="form-control"
                value={reserva.nombre}
                name="nombre"
                onChange={handleChange}
              />
              <label className="fw-bold">Descripción</label>
              <textarea
                className="form-control"
                value={reserva.descripcion}
                onChange={handleChange}
                name="descripcion"
              ></textarea>
              <label className="fw-bold">Precio</label>
              <input
                type="number"
                className="form-control"
                value={reserva.precio}
                onChange={handleChange}
                name="precio"
              />
              {/* cambiar categoria */}
              <div className="my-2">
                <p>
                  <span className="fw-bold">Categoría actual:</span>{" "}
                  {reserva.categoria.nombre}
                </p>
                <label className="fw-bold">Cambiar categoría</label>
                <select
                  className="form-select"
                  name="categoria"
                  onChange={handleChange}
                >
                  <option value={reserva.categoria.nombre}>
                    Elije una categoría
                  </option>
                  {categorias &&
                    categorias.map((categoria) => (
                      <option key={categoria._id} value={categoria._id}>
                        {categoria.nombre}
                      </option>
                    ))}
                </select>
              </div>
              {/* switch */}
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={reserva.destacado}
                  onChange={handleChange}
                  name="destacado"
                />
                <label className="form-check-label fw-bold">Destacado</label>
              </div>
              <div className="d-grid mt-2">
                <button className="btn btn-warning">Actualizar</button>
              </div>
            </form>
          ) : (
            <h3>Cargando...</h3>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEdit;
