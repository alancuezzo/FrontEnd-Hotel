import './css/reserva.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReservaScreen from './pages/ReservaScreen';

function App() {


  return (
   <BrowserRouter >
   <Routes>
    <Route path='/reservas' element={<ReservaScreen/>} />
   </Routes>
   
   </BrowserRouter>
  )
}

export default App
