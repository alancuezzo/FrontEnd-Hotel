import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MessageApp = ({ mensaje }) => {
  const [color, setColor] = useState("");


  useEffect(() => {
    if (mensaje == "Login OK!") {
      setColor("bg-success");
    } else {
      setColor("bg-danger");
    }
  }, [mensaje]);

  return (
    <div className={`alert ${color} text-center`} role="alert">
      {mensaje}
    </div>
  );
};

export default MessageApp;
