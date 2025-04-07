import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='footer-inner'>
        <ul>
          <li><a href='#'>이용약관</a></li>
          <li><a href='#'><strong>개인정보처리방침</strong></a></li>
          <li>고객센터 <em className='point'>1522-0209</em></li>
        </ul>
        <address>Copyright ©Mcircle. All right reserved</address>
      </div>
    </footer>
  )
}

export default Footer