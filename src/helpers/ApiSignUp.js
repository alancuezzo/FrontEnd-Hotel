import Swal from "sweetalert2";

const url = "https://backend-hotel-6fff.onrender.com/api/usuarios"




export const Registrar = async (data) => {
    // const usuario = {
    //     "nombre": data.signUpNombre,
    //     "correo": data.signUp,
    //     "password": data.signUp,
    //     "edad": data.signUp,
    // }
    try {
        //     const resp = await fetch(url, {
        //         method: "POST",
        //         body: JSON.stringify(data),
        //         headers: {
        //             "Content-type": "application/json; charset=UTF-8",
        //         },
        //     });
        //     const datos = await resp.json();
        //     return datos;
        Swal(data);
    } catch (error) {
        alert(error);
        return Swal.fire("Hubo Un Error En El Servidor, Porfavor Intente En Otro Momento")
    }

}







