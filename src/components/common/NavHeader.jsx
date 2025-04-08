import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavHeader = ({navTitle}) => {
 const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // -1은 한 단계 뒤로 가기
  };
  return (
    <>
      <div className='nav-header '>
        <div className='container'>
          <button className="prev"  onClick={goBack}><span className='blind'>이전</span></button>
          <h2 className='ellipsis'>{navTitle}</h2>
        </div>
      </div>
    </>
  )
}

export default NavHeader