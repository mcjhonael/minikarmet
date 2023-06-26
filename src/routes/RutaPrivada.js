import React, {useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const RutaPrivada = () => {
const [isAuth, setIsAuth] = useState(true)

    return (
            isAuth ? <Outlet/> :<Navigate to="/" />

  )
}

export default RutaPrivada