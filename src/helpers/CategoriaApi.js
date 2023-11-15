const url = "http://localhost:8080/api/categorias";
const token = JSON.parse(localStorage.getItem("token"));
const limite = 0;

export const getCategorias = async (desde = 0) => {
  try {
    const resp = await fetch(url + "?limite=" + limite + "&desde=" + desde, {
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
    throw new Error("No se pudo obtener la informacion!");
  }
};


export const getCategoriaById = async (id) => {
  try {
    const resp = await fetch(url + "/" + id, {
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
    throw new Error("No se pudo obtener la informacion!");
  }
};