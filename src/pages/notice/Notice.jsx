import React from 'react'
import NavHeader from '../../components/common/NavHeader'
import Listbox from '../../components/list/Listbox'

const Notice = () => {
  return (
    <>
      <NavHeader navTitle="공지사항" />
      <div className='container-wrap'>
        <div className='list-box'>
          <Listbox 
            link='/notice/view'
            title="컨퍼런스 이용시 주의사항"
            date="2022-08-31"
          />
          <Listbox 
            link='/notice/view'
            title="컨퍼런스 이용시 주의사항"
            date="2022-08-31"
          />
          <Listbox 
            link='/notice/view'
            title="컨퍼런스 이용시 주의사항"
            date="2022-08-31"
          />
        </div>
        <div className='btn-wrap btm'>
          <button className='btn-base btn-more'>더보기</button>
        </div>
      </div>
    </>
    
  )
}

export default Notice