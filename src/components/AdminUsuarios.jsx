import React from 'react'
import { traerUsuarios } from '../helpers/AdminApi'

const AdminUsuarios = () => {
    const pedirUsuarios = () => {
        let usuarios = traerUsuarios();
        console.log(usuarios);
    }
    pedirUsuarios();
    return (
        <div>
            <p>lista de usuarios</p>
        </div>
    )
}

export default AdminUsuarios
