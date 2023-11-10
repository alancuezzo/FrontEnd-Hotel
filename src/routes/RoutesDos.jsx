import { Routes, Route } from "react-router-dom";
// import NavbarApp from "../components/NavbarApp";
// import AboutScreen from "../pages/AboutScreen";
// import AdminScreen from "../pages/AdminScreen";
// import ErrorScreen from "../pages/ErrorScreen";
<<<<<<< HEAD
// import HomeScreen from "../pages/HomeScreen";
import ProtectedRoutesAdmin from "../routes/ProtectedRoutesAdmin";
=======
import Home from "../pages/Home";
// import ProtectedRoutesAdmin from "../routes/ProtectedRoutesAdmin";
import Footer from "../components/Footer";
>>>>>>> 86929bded6d3cd8d51c6b4349eee98b163b6eebf

const RoutesDos = ({ cerrarSesion, user }) => {
  return (
    <>
      <NavbarApp cerrarSesion={cerrarSesion} user={user} />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route
=======
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutScreen />} /> */}
        {/* <Route
>>>>>>> 86929bded6d3cd8d51c6b4349eee98b163b6eebf
          path="/admin"
          element={
            <ProtectedRoutesAdmin user={user}>
              <AdminScreen />
            </ProtectedRoutesAdmin>
<<<<<<< HEAD
          }
         /> 
        <Route path="*" element={<ErrorScreen />} />
=======
          } /> */}
        {/* <Route path="*" element={<ErrorScreen />} /> */}
>>>>>>> 86929bded6d3cd8d51c6b4349eee98b163b6eebf



      </Routes>
<<<<<<< HEAD
      <FooterApp />
=======
      <Footer />
>>>>>>> 86929bded6d3cd8d51c6b4349eee98b163b6eebf
    </>
  );
};

export default RoutesDos;
