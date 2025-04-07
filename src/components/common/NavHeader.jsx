import React from 'react'
import { Link } from 'react-router-dom'

const NavHeader = ({navTitle}) => {
  return (
    <>
      <div className='nav-header '>
        <div className='container'>
          <Link to="" className="prev"><span className='blind'>이전</span></Link>
          <h2 className='ellipsis'>{navTitle}</h2>
        </div>
      </div>
    </>
  )
}

export default NavHeader