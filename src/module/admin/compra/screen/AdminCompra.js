import React from 'react'
import CompraTabla from '../components/CompraTabla'
import SideBar from '../../categoria/components/SideBar'

const AdminCompra = () => {
  return (
    <>
    <SideBar/>
    <div>Holiiiiii estoy</div>
    <div className="row justify-content-center mt-4">
        <div className="col col-md-10">
          <CompraTabla/>
        </div>
      </div>
    </>
  )
}

export default AdminCompra;