import React from 'react'
import VentaTabla from '../components/VentaTabla'
import SideBar from '../../categoria/components/SideBar'

const AdminVenta = () => {
  return (
    <>
    <SideBar/>
    <div>Holiiiiii estoy</div>
    <div className="row justify-content-center mt-4">
        <div className="col col-md-10">
          <VentaTabla/>
        </div>
      </div>
    </>
  )
}

export default AdminVenta;