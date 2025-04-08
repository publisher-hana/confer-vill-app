import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../layout.scss'
import SideBar from './SideBar'

const Header = ({type}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 
  const openSidebar = () => {
    setIsOpen(true);
  };
  const closeSidebar = () => {
    setIsOpen(false);  // 사이드바를 닫기 위해 false로 설정
  };
  //경로 변경 시 사이드 바 닫기기
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`mb-header flex ${type === 'login' ? 'login-header' : ''}`}>
      <h1><Link to="/" className='logo'></Link></h1>
      <button className='all-menu' onClick={openSidebar}></button>
      <SideBar isOpen={isOpen} closeSidebar={closeSidebar} />
      <div className={`cover full  ${isOpen ? 'on' : ""}`}></div>
    </header>
  )
}

export default Header