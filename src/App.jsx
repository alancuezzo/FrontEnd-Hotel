import './css/reserva.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReservaScreen from './pages/ReservaScreen';
import { useState } from "react";
import LoginSignUp from "./pages/LoginSignUp";
import ProtectedRoutes from "./routes/ProtectedRoutes"
import RoutesDos from "./routes/RoutesDos"
import SignUp from "./components/SignUp"


function App() {
  //Estados para manejar el login y datos del usuario
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  //funcion para guarsar datos del usuario
  const guardarUsuario = (datos) => {
    setUser(datos);
  };

  //funcion para iniciar sesion
  const iniciarSesion = () => {
    setLogin(true);
  };

  //funcion para cerrar sesion
  const cerrarSesion = () => {
    setLogin(false);
  };

  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* Rutas proteg para login, datos de usuario y func cerrar sesion */}
          {/* <Route
            path="/*"
            element={
              <ProtectedRoutes login={login}>
                <RoutesDos cerrarSesion={cerrarSesion} user={user} />
              </ProtectedRoutes>
            }
          /> */}
          {/* <Route path="*" element={<ErrorScreen />} /> */}

          {/* Ruta login que recibe funcion iniciar sesion y guardar datos */}
          <Route path='/reservas' element={<ReservaScreen/>} />
          <Route
            path="/login"
            element={
              <LoginSignUp
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

