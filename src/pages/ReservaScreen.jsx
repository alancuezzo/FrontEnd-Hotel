import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/reserva.css";
import { crearReserva } from "../helpers/ReservaApi";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "react-bootstrap/Button";
import MessageApp from "../components/MessageApp";
import { styled } from "@mui/material/styles";
import { FormText } from "react-bootstrap";
import  InputCategoria  from "../components/InputCategoria";

const CssTextField = styled(
  TextField,
  Select
)({
  "& label.Mui-focused": {
    color: "#ffff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ffff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ffff",
    },
    "&:hover fieldset": {
      borderColor: "#ffff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffff",
    },
  },
});

const ReservasScreen = (Reservacion, guardarReserva) => {
  const navigate = useNavigate();
  const [inputNombre, setInputNombre] = useState("");
  const [inputUsuario, setInputUsuario] = useState("");
  const [entrada, setEntrada] = useState('');
  const [salida, setSalida] = useState('');

  const [categorias, setCategorias] = useState(null);

  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const categoriaSeleccionada = (categoria) => {
    setCategorias(categoria);
  };

  const handleReservas = async (e) => {
    e.preventDefault();
    //ejecutar setLoading
    setLoading(true);



    const datos = {
      acompañantes: inputNombre,
      usuario: inputUsuario,
      entrada: entrada,
      salida: salida,
      categoria: categorias,
    };

    const resp = await crearReserva(datos);
    console.log(resp);

    if (resp?.token) {
      localStorage.setItem("token", JSON.stringify(resp.token));

      Reservacion();

      guardarReserva(resp.reserva);

      navigate("/");
    }

    setResultado(resp);

    setLoading(false);
  };

 

  return (
    <>
      <div className="container-fluid">
        <div className="borde">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm goldenimg">
              <img
                className="mx-auto h-10 w-auto goldenimg1 "
                src="/src/assets/GOLDEN_LOGO.png"
                alt="Golden Palace"
              />
              <h2 className="mt-10 texto text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Book Here
              </h2>
            </div>
          </div>

          <form onSubmit={handleReservas} className="formcompleto">
            <Row>
              <div className="formul">

              <Col className="formu ">
                  <Form.Control
                    value={inputUsuario}
                    onChange={(e) => setInputUsuario(e.target.value)}
                    className="formu1"
                    type="text"
                    placeholder="Nombre de Usuario"
                  />
                </Col>

                <Col className="formu"> 
                  <Form.Control
                    value={inputNombre}
                    onChange={(e) => setInputNombre(e.target.value)}
                    className="formu1"
                    type="text"
                    placeholder="Acompañantes"
                  />
                </Col>
               
              </div>

              <div className="calendario">
                <div className="cal">
                  <h4 className="ensal">Entrada</h4>
                  <div className="input-group mb-3">
                    <input
                      type="date"
                      className="form-control calendar1 bg-transparent"
                      placeholder="Username"
                      aria-label="Username"
                      id="entrada"
                      value={entrada}
                      onChange={(e) => setEntrada(e.target.value)}
                    />
                  </div>
                </div>

                <div className="cal">
                  <h4 className="ensal">Salida</h4>
                  <div className="input-group mb-3">
                    <input
                      type="date"
                      className="form-control calendar1 bg-transparent"
                      placeholder="Username"
                      aria-label="Username"
                      id="salida"
                      value={salida}
                      onChange={(e) => setSalida(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="catego">
                <div className="catego border-0 catego1">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="text-center w-100 text-lg">Habitaciones</Form.Label>
                    <Form.Select className="hab bg-transparent " defaultValue="Choose...">
                    <InputCategoria  categoriaSeleccionada={categoriaSeleccionada}/>
                    
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
            </Row>
          </form>
          <div className="boton">
            <button
              onClick={handleReservas}
              disabled={loading && true}
              className="button"
              as="input"
              type="submit"
              value="Reservar"
            >
              Reservar
            </button>
          </div>
          {resultado?.msg && (
            <div className="mt-2">
              <MessageApp mensaje={resultado.msg} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ReservasScreen;
