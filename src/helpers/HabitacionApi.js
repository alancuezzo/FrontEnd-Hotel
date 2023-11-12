const url = "http://localhost:8080/api/habitaciones";
const token = JSON.parse(localStorage.getItem("token"));

export const getHabitaciones = async (limite = 0, pagina = 0) => {
    try {
      const resp = await fetch(`${url}?limite=${limite}&desde=${pagina}`);
      const data = await resp.json();
  
      return data; 
    } catch (error) {
      console.log(error);
      throw new Error("No se pudo obtener la información de habitaciones");
    }
  };

export const getHabitacionById = async (id) => {
  try {
    const resp = await fetch(`${url}/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo obtener la información de la habitación");
  }
};

export const crearHabitacion = async (datos) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con el backend para crear habitación" };
  }
};

export const actualizarHabitacion = async (id, datos) => {
  try {
    const resp = await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con el backend para actualizar habitación" };
  }
};

export const borrarHabitacion = async (id) => {
  try {
    const resp = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con el backend para borrar habitación" };
  }
};