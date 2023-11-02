import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { crearReserva } from "../helpers/ReservaApi";
import "../css/reserva.css";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from 'react-bootstrap/Button';
import MessageApp from "../components/MessageApp";
import { styled } from '@mui/material/styles';




const CssTextField = styled(TextField,Select)({
  '& label.Mui-focused': {
    color: '#ffff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#ffff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ffff',
      
    },
    '&:hover fieldset': {
      borderColor: '#ffff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ffff',
      
    },
  },
});





const ReservasScreen = (Reservacion, guardarReserva) => {
  
  const navigate = useNavigate();

  const [inputNombre, setInputNombre] = useState("");
  const [inputUsuario, setInputUsuario] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

 const [caterogia, setCaterogia] = React.useState('');

 const [resultado, setResultado] = useState(null);
 const [loading, setLoading] = useState(false);

 const handleReservas = async (e) => {
  e.preventDefault();
  //ejecutar setLoading
  setLoading(true);

  const datos = {
    correo: inputNombre,
    usuario: inputUsuario,
    entrada: startDate,
    salida: endDate,


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
        <Col className='formu'>
        <Form.Control  value={inputNombre} onChange={(e) => setInputNombre(e.target.value)} className='formu1'  type="text" placeholder="Full Name" />
        </Col>
        <Col className='formu '>
        <Form.Control  value={inputUsuario} onChange={(e) => setInputUsuario(e.target.value)} className='formu1'  type="text" placeholder="Username" />
        </Col>
        </div>
       

      

        <Col className='calendar'>
          <div className="cal"> <LocalizationProvider className='datepicker' label="Responsive variant" dateAdapter={AdapterDayjs}>
          <h4 className='ensal'>Entrada</h4>
      <DatePicker  selected={startDate} onChange={date => setStartDate(date)} className='datepicker'  renderInput={({ inputRef, inputProps, InputProps }) => (
      <Box sx={{ borderColor:'warning' }}>
        <input ref={inputRef} {...inputProps} />
        {InputProps?.endAdornment}
      </Box>
    )} />
    </LocalizationProvider>
    </div>
    
    
    <div className="cal"> <LocalizationProvider className='datepicker'  label="Responsive variant" dateAdapter={AdapterDayjs}>
          <h4 className='ensal'>Salida</h4>
      <DatePicker selected={endDate} onChange={date => setEndDate(date)} className='datepicker' />
    </LocalizationProvider>
    </div>
       
    </Col>
   
    <div className="personas">
<CssTextField
           sx={{
            '& > :not(style)': { color:'white' },
          }}
          id="custom-css-outlined-input"
          label="Number of people"
          type="number"
          required
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
</div>


<div className="catego" >
<Box  sx={{width: 250, mt:1, borderColor:'white' }}>
      <FormControl fullWidth  sx={{
        '& > :not(style)': { m: 1, width: '25ch', color:'white', borderColor:'white' },
      }}>
        <InputLabel id="demo-simple-select-label" color="warning">Categorias</InputLabel>
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
       <Button onClick={handleReservas} disabled={loading && true}  className='button' as="input" type="submit" value="Reservar" />
    </div>
    {resultado?.msg && (
              <div className="mt-2">
                <MessageApp mensaje={resultado.msg} />
              </div>
            )}
    </div>
   
  </>
)
}
  


export default ReservasScreen
