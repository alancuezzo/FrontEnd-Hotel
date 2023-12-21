import { Navigate } from "react-router-dom";

const ProtectedRoutesAdmin = ({ children, user, login }) => {
  //   if (login) {
  //     if (user.rol === "ADMIN_ROLE") {
  //       console.log(user);
  //       return children;
  //     }
  //   } else {
  //     <Navigate to={"/login"} />
  //   }
  // }
  return children;
}
  ;

export default ProtectedRoutesAdmin;
//!Ver RoutesDos.jsx
