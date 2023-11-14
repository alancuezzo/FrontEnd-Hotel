import React, {useState, useEffect} from 'react'
import { getCategorias } from "../helpers/CategoriaApi";

const InputCategoria = ({ categoriaSeleccionada }) => {
    const [categorias, setCategorias] = useState(null);

    useEffect(() => {
        traerCategorias();
      }, []);
    
      const traerCategorias = async () => {
        const datos = await getCategorias();
        console.log(datos.categorias);
        setCategorias(datos.categorias);
      };

  return (
   
      <div className="container-fluid">
        <span className="navbar-brand">Categorías:</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavCate"
          aria-controls="navbarNavCate"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavCate">
          {categorias && (
            <ul className="navbar-nav">
              <li className="nav-item me-2">
                <button
                  className="btn btn-dark"
                  onClick={() => categoriaSeleccionada("")}
                >
                  TODAS
                </button>
              </li>
              {categorias.map((categoria) => (
                <li className="nav-item me-2" key={categoria._id}>
                  <button
                    className="btn btn-dark"
                    onClick={() => categoriaSeleccionada(categoria.nombre)}
                  >
                    {categoria.nombre}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
   
  );
};

export default InputCategoria;

