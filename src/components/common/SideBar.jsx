import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SideBar = ({isOpen, closeSidebar}) => {
  return (
    <>
      <nav className={`side-bar  ${isOpen ? 'open' : ""}`}>
        <button className='btn-close' onClick={closeSidebar}><span className='blind'>닫기</span></button>
        <div className='membership'>
          {/* 
          <Link className='login' to='/login'>로그인</Link>
          <Link>회원가입</Link> */}
        </div>
        <ul className='menu-list'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/conference">Conference</NavLink></li>
          <li><NavLink to="/notice">공지사항</NavLink></li>
          <li><NavLink to="/brand">브랜드존</NavLink></li>
          <li><NavLink to="/inquiry">1:1문의</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default SideBar