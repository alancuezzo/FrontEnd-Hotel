import { Routes, Route } from "react-router-dom";
// import NavbarApp from "../components/NavbarApp";
// import AboutScreen from "../pages/AboutScreen";
// import AdminScreen from "../pages/AdminScreen";
// import ErrorScreen from "../pages/ErrorScreen";
import Home from "../pages/Home.jsx";
import ReservasScreen from "../pages/ReservaScreen.jsx";
// import ProtectedRoutesAdmin from "../routes/ProtectedRoutesAdmin";
import Footer from "../components/Footer";

const RoutesDos = ({ cerrarSesion, user }) => {
  return (
    <>
      {/* <NavbarApp cerrarSesion={cerrarSesion} user={user} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservas" element={<ReservasScreen />} />
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
