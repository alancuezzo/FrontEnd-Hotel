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
   
      
     <>
          {categorias && (
            < >
             
              {categorias.map((categoria) => (
                <option value={categoria} className=" " key={categoria._id}>
                  <button
                    className="btn btn-dark"
                    onClick={() => categoriaSeleccionada(categoria.nombre)}
                  >
                    {categoria.nombre}
                  </button>
                </option>
              ))}
            </>
          )}
        
        </>
  );
};

export default InputCategoria;

