import './css/reserva.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReservaScreen from './pages/ReservaScreen';
import { useState } from "react";
// import ProtectedRoutes from "./routes/ProtectedRoutes"
// import RoutesDos from "./routes/RoutesDos"
import SignUp from "./components/SignUp"
import Login from './components/Login';


function App() {

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  const guardarUsuario = (datos) => {
    setUser(datos);
  };

  const iniciarSesion = () => {
    setLogin(true);
  };

  const cerrarSesion = () => {
    setLogin(false);
  };

  return (
    <>
      {/* 
      <Route
        path="/*"
        element={
          <ProtectedRoutes login={login}>
            <RoutesDos cerrarSesion={cerrarSesion} user={user} />
          </ProtectedRoutes>
        }
      /> */}
      {/* <Route path="*" element={<ErrorScreen />} /> */}
      <BrowserRouter>
        <Routes>

          <Route path='/reservas' element={<ReservaScreen />} />
          <Route
            path="/login"
            element={
              <Login
                iniciarSesion={iniciarSesion}
                guardarUsuario={guardarUsuario} />
            }
          />
          <Route path="/SignUp"
            element={
              <SignUp />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

