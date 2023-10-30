import React from 'react';
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





// const categorias = [
//   'Habitacion Simple',
//   'Habitacion Doble',
//   'Habitacion Suit',
//   'Habitacion Suit de Lujo',
//   'Habitacion Familiar',
  
// ];




const ReservasScreen = () => {

  const [caterogia, setCaterogia] = React.useState('');

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

      <Form className='formcompleto'>
      <Row>
        <div className='formul'>
        <Col className='formu'>
        <Form.Control className='formu1'  type="text" placeholder="Full Name" />
        </Col>
        <Col className='formu '>
        <Form.Control className='formu1'  type="text" placeholder="Username" />
        </Col>
        </div>
       

      

        <Col className='calendar'>
          <div className="cal"> <LocalizationProvider className='datepicker' label="Responsive variant" dateAdapter={AdapterDayjs}>
          <h4 className='ensal'>Entrada</h4>
      <DatePicker className='datepicker' />
    </LocalizationProvider>
    </div>
    
    
    <div className="cal"> <LocalizationProvider className='datepicker' label="Responsive variant" dateAdapter={AdapterDayjs}>
          <h4 className='ensal'>Salida</h4>
      <DatePicker className='datepicker' />
    </LocalizationProvider>
    </div>
       
    </Col>
   
    <div className="personas">
<TextField
          
          id="standard-number"
          label="Number of people"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
</div>

<div className="catego">
<Box  sx={{width: 250, mt:1,  color: "rgb(229,228,226)", }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={caterogia}
          label="Categorias"
          onChange={handleChange}
        >
          <MenuItem value={10}>Habitacion Simple</MenuItem>
          <MenuItem value={20}>Habitacion Doble</MenuItem>
          <MenuItem value={30}>Habitacion Familiar</MenuItem>
          <MenuItem value={40}>Habitacion Suit</MenuItem>
        </Select>
      </FormControl>
    </Box>
</div>
   


        
      </Row>
    </Form>
    <div className="boton">
       <Button className='button' as="input" type="submit" value="Submit" />{' '}
    </div>
   
    </div>
   
  </>
)
}
  


export default ReservasScreen
