import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/reserva.css";
import { crearReserva } from "../helpers/ReservaApi";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Button from 'react-bootstrap/Button';
import MessageApp from "../components/MessageApp";
// import { styled } from '@mui/material/styles';
// import { FormText } from "react-bootstrap";





// const CssTextField = styled(TextField,Select)({
//   '& label.Mui-focused': {
//     color: '#ffff',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: '#ffff',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: '#ffff',
      
//     },
//     '&:hover fieldset': {
//       borderColor: '#ffff',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#ffff',
      
//     },
//   },
// });





const ReservasScreen = (Reservacion, guardarReserva) => {
  
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ entrada: "", salida: "" });
  const [inputNombre, setInputNombre] = useState("");
  const [inputUsuario, setInputUsuario] = useState("");

 const [caterogia, setCaterogia] = React.useState('');

 const [resultado, setResultado] = useState(null);
 const [loading, setLoading] = useState(false);

 const handleReservas = async (e) => {
  e.preventDefault();
  
  setLoading(true);

  const datos = {
    correo: inputNombre,
    usuario: inputUsuario,
 
    
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

const handleChange = (event) => {
  setCaterogia(event.target.value);
};

  return (
    <>
    <div className="container-fluid">
  <div className='borde'>
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

      <Form onSubmit={handleReservas} className='formcompleto'>
      <Row>
        <div className='formul'>
       
        <Col className='formu '>
        <Form.Control  value={inputUsuario} onChange={(e) => setInputUsuario(e.target.value)} className='formu1'  type="text" placeholder="Username" />
        </Col>
        <Col className='formu'>
        <Form.Control  value={inputNombre} onChange={(e) => setInputNombre(e.target.value)} className='formu1'  type="text" placeholder="Acompañantes" />
        </Col>
        </div>
       

      
<div className="calendario">
       
          <div className="cal"> 
          <h4 className='ensal' >Entrada</h4>
          <div className="input-group mb-3">
        <input
          type="date"
          className="form-control calendar1"
          placeholder="Username"
          aria-label="Username"
          id="entrada"
          value={formValues.entrada}
          onChange={(e) => {
            setFormValues({ ...formValues, [e.target.id]: e.target.value });
          }}
        />
      </div>
    </div>
    
    
    
          <div className="cal"> 
          <h4 className='ensal' >Salida</h4>
          <div className="input-group mb-3">
        <input
          type="date"
          className="form-control calendar1"
          placeholder="Username"
          aria-label="Username"
          id="salida"
          value={formValues.salida}
          onChange={(e) => {
            setFormValues({ ...formValues, [e.target.id]: e.target.value });
          }}
        />
      </div>
    </div>
       
    
    </div>
 


<div className="catego" >
<Box  sx={{width: 250, mt:1, borderColor:'white',  }}>
      <FormControl fullWidth  sx={{
        '& > :not(style)': { m: 1, width: '25ch', color:'white', borderColor:'white' },
      }}>
        <InputLabel id="demo-simple-select-label" color="warning">Habitaciones</InputLabel>
        <Select 
          color="warning"
          labelId="demo-simple-select-label"
          id="outlined-select-currency-native"
          value={caterogia}
          label="Categorias"
          onChange={handleChange}
          required
        >
          <MenuItem value={10}>Habitacion Simple</MenuItem>
          <MenuItem value={20}>Habitacion Doble</MenuItem>
          <MenuItem value={30}>Habitacion Triple</MenuItem>
          <MenuItem value={40}>Habitacion Familiar</MenuItem>
          <MenuItem value={50}>Habitacion Suit</MenuItem>
          <MenuItem value={60}>Habitacion Suit Presidencial</MenuItem>
          <MenuItem value={70}>Habitacion Ejecutivas</MenuItem>
        </Select>
      </FormControl>
    </Box>
</div>




        
      </Row>
    </Form>
    <div className="boton">
       <button onClick={handleReservas} disabled={loading && true}  className='button' as="input" type="submit" value="Reservar">Reservar</button>
    </div>
    {resultado?.msg && (
              <div className="mt-2">
                <MessageApp mensaje={resultado.msg} />
              </div>
            )}
    </div>
    </div>
  </>
)
}
  


export default ReservasScreen
