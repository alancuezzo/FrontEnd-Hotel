import React, { useState } from 'react'
import { traerHabitaciones } from '../helpers/AdminApi'

const FormHabitaciones = () => {

    const data = traerHabitaciones();

    const [values, setValues] = useState({
        nombre: "",
        correo: "",
        password: "",
        edad: "",
    });

    log
    return (
        <div>
            <p>{data}</p>
        </div>
    )
}

export default FormHabitaciones
