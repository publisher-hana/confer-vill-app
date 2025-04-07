import React from 'react'
import NavHeader from '../../components/common/NavHeader'
import Layout from '../../components/common/Layout'

const NoticeView = () => {
  return (
    <>
       <NavHeader navTitle="공지사항" />
       <div className='container-wrap'>
          <Layout>
            <div className='board-cont'>
              <div className='board-header'>
                <h3 className='title'>심부전학회 세션3 출석이 안 되었습니다.</h3>
                <span><em>작성일</em><span className='text-gray'>2022-08-01</span></span>
                <a href='' className='file-down'><span className='ico-file'></span>대한장연구학회 제 91차 학술집담회</a>
              </div>
              <div className='board-cont'>
                안녕하세요
                <br/>심부전학회 세션 3 출석이 안되었는데
                <br/>확인 부탁드립니다.
              </div>
            </div>
            <div className='btn-wrap btm right'>
              <button className='btn-base line btn-list gray'>목록으로</button>
            </div>
          </Layout>
        </div>
    </>
  )
}

export default NoticeView