import React from 'react'
import './login.scss'
const Login = () => {
  return (
    <>
      <div className='login-cont'>
        <div className='header'>
          로그인
        </div>
        <div className='container'>
          <div className='logo'><img src='/confer-vill-app/images/login_logo.png' alt='conference ville'/></div>
          <p className='desc'>다양한 의료 웹 세미나<br/>컨퍼런스빌에서 편리하게 참여하세요!</p>
        </div>
      </div>
    </>
  )
}

export default Login