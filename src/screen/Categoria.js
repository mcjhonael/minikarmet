import React from 'react'

const Categoria = ({objDato}) => {
  return (
    <tr>
        <td>{objDato.id}</td>
        <td>{objDato.nombre}</td>
        <td>{objDato.descripcion}</td>
        <td>
            <button className='btn btn-outline-warning'>Actualizar</button>
            <button className='btn btn-outline-danger'>Eliminar</button>
        </td>
    </tr>
  )
}

export default Categoria