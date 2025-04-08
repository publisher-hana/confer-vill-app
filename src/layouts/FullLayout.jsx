import React from 'react'
import { Outlet } from 'react-router-dom'

const FullLayout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default FullLayout