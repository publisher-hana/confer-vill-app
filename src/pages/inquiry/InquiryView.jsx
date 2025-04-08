import React from 'react'
import NavHeader from '../../components/common/NavHeader'
import Layout from '../../components/common/Layout'
import { useNavigate } from 'react-router-dom';

const InquiryView = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // -1은 한 단계 뒤로 가기
  };
  return (
    <>
       <NavHeader navTitle="1:1문의" />
       <div className='container-wrap'>
          <Layout>
            <div className='board-cont'>
              <div className='board-header'>
                <h3 className='title'>심부전학회 세션3 출석이 안 되었습니다.</h3>
                <span><em>작성일</em><span className='text-gray'>2022-08-01</span></span>
              </div>
              <div className='board-cont'>
                안녕하세요
                <br/>심부전학회 세션 3 출석이 안되었는데
                <br/>확인 부탁드립니다.
              </div>
              <div className='board-cont'>
                <span className='label-reply'>답변완료</span>
                안녕하세요
                <br/>심부전학회 세션 3 출석처리되었습니다.
                <br/><br />감사합니다.
              </div>
            </div>
            <div className='btn-wrap btm right'>
              <button onClick={goBack} className='btn-base line btn-list gray'>목록으로</button>
            </div>
          </Layout>
        </div>
    </>
  )
}

export default InquiryView