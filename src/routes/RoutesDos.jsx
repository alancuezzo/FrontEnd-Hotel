import { Routes, Route } from "react-router-dom";
// import NavbarApp from "../components/NavbarApp";
// import AboutScreen from "../pages/AboutScreen";
// import AdminScreen from "../pages/AdminScreen";
// import ErrorScreen from "../pages/ErrorScreen";
import Home from "../pages/Home.jsx";
import ReservasScreen from "../pages/ReservaScreen.jsx";
import HabitacionesPage from "../pages/HabitacionesPage.jsx";  // Nuevo
import DetalleHabitacionPage from "../pages/DetalleHabitacionPage.jsx"; 
// import ProtectedRoutesAdmin from "../routes/ProtectedRoutesAdmin";
import Footer from "../components/Footer";

const RoutesDos = ({ cerrarSesion, user }) => {
  return (
    <>
      {/* <NavbarApp cerrarSesion={cerrarSesion} user={user} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservas" element={<ReservasScreen />} />
        <Route path="/habitaciones" element={<HabitacionesPage />} />
        <Route path="/habitaciones/:id" element={<DetalleHabitacionPage />} />
        {/* <Route path="/about" element={<AboutScreen />} /> */}
        {/* <Route
          path="/admin"
          element={
            <ProtectedRoutesAdmin user={user}>
              <AdminScreen />
            </ProtectedRoutesAdmin>
          } /> */}
        {/* <Route path="*" element={<ErrorScreen />} /> */}



      </Routes>
      <Footer />
    </>
  );
};

export default RoutesDos;
