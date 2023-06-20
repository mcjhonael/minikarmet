import React, { useEffect, useState } from 'react'
import { getCategorias } from '../services/services'
import Categoria from './Categoria'

const Categorias = () => {
    const [dato, setDato] = useState([])

    useEffect(() => {
      getCategorias().then((respuesta)=>{
        console.log(respuesta);
        setDato(respuesta)
      })
    }, [])
    
  return (
    <table className="table table-hover table-bordered justify-content-center" border="1px">
        <thead>
            <tr>
                <th><strong>ID</strong></th>
                <th><strong>Nombre</strong></th>
                <th><strong>Descripcion</strong></th>
                <th><strong>Acciones</strong></th>
            </tr>
        </thead>
        <tbody>
          {
            dato.map((objDato)=>{
              return (<Categoria objDato={objDato} key={objDato.id} / >)
            })
          }
        </tbody>
    </table>
  )
}

export default Categorias;