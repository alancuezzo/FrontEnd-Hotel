<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useEffect, useState } from "react"
>>>>>>> 44581a53fa617741c2ad65547478cdd0eb7f434a

const MessageApp = ({ mensaje }) => {
  const [color, setColor] = useState("");

  //cuando se monta el componente y cuando cambia el mensaje
  useEffect(() => {
<<<<<<< HEAD
    if (mensaje == "Login OK") {
      setColor("alert-success");
    } else {
      setColor("alert-danger");
=======
    if (mensaje == "Login OK!") {
      setColor("bg-success");
    } else {
      setColor("bg-danger");
>>>>>>> 44581a53fa617741c2ad65547478cdd0eb7f434a
    }
  }, [mensaje]);

  return (
    <div className={`alert ${color} text-center`} role="alert">
      {mensaje}
    </div>
  );
};

export default MessageApp;
