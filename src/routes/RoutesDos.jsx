import { Routes, Route } from "react-router-dom";
// import NavbarApp from "../components/NavbarApp";
// import AboutScreen from "../pages/AboutScreen";
import ErrorScreen from "../pages/ErrorScreen";
import Home from "../pages/Home.jsx";
import ReservasScreen from "../pages/ReservaScreen.jsx";
import ProtectedRoutesAdmin from "../routes/ProtectedRoutesAdmin";
import Footer from "../components/Footer";
import Admin from "../pages/Admin.jsx";


const RoutesDos = ({ cerrarSesion, user, login }) => {
  return (
    <>
      {/* <NavbarApp cerrarSesion={cerrarSesion} user={user} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservas" element={<ReservasScreen />} />
        {/* <Route path="/about" element={<AboutScreen />} /> */}
        {/* <Route path="*" element={<ErrorScreen />} /> */}
        <Route path="/admin" element={Admin} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesDos;
