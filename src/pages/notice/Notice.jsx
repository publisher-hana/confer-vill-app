import React from 'react'
import NavHeader from '../../components/common/NavHeader'
import { Link } from 'react-router-dom'

const Notice = () => {
  return (
    <>
      <NavHeader navTitle="공지사항" />
      <div className='container-wrap'>
        <div className='list-box'>
          <div className='box container m0'>
            <Link to='/notice/view'>
              <strong>컨퍼런스 이용시 주의사항</strong>
              <span className='tail'>2022-08-31</span>
            </Link>
          </div>
          <div className='box container m0'>
            <Link to='/notice/view'>
              <strong>컨퍼런스 이용시 주의사항</strong>
              <span className='tail'>2022-08-31</span>
            </Link>
          </div>
          <div className='box container m0'>
            <Link to='/notice/view'>
              <strong>컨퍼런스 이용시 주의사항</strong>
              <span className='tail'>2022-08-31</span>
            </Link>
          </div>
        </div>
        <div className='btn-wrap btm'>
          <button className='btn-base line btn-more'>더보기</button>
        </div>
      </div>
    </>
    
  )
}

export default Notice