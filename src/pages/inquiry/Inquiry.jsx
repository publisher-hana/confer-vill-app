import React, { useState } from 'react'
import NavHeader from '../../components/common/NavHeader'
import { Link} from 'react-router-dom'
import Layout from '../../components/common/Layout';
import Listbox from '../../components/list/Listbox';

const Inquiry = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  return (
    <>
    <NavHeader navTitle="문의내역" />
      <div className='container-wrap'>
        <Layout>
          <div className='category-tabs'>
            <button 
              className={selectedCategory === 'all' ? 'on' : ''} 
              onClick={()=>setSelectedCategory('all')}>전체</button>
            <button 
              className={selectedCategory === 'replyEnd' ? 'on' : ''} 
              onClick={()=>setSelectedCategory('replyEnd')}>답변완료</button>
              <button 
              className={selectedCategory === 'replyWait' ? 'on' : ''} 
              onClick={()=>setSelectedCategory('replyWait')}>답변대기</button>
          </div>
          {selectedCategory === 'all' && (
            <div className='inquiry-cont'>
              <div className='list-box'>
                <Listbox 
                  link='/inquiry/view'
                  title="2022년 대한심부전학회 개원의 연수강좌"
                  date="2022-08-31"
                  labelClass="wait"
                  label="답변대기"
                />
                <Listbox link='/inquiry/view'
                  title="2022년 대한심부전학회 개원의 연수강좌"
                  date="2022-08-31"
                  label="답변완료"
                />
                <Listbox link='/inquiry/view'
                  title="2022년 대한심부전학회 개원의 연수강좌"
                  date="2022-08-31"
                  label="답변완료"
                />
              </div>
            </div>
          )}
         {selectedCategory === 'replyEnd' && (
            <div className='inquiry-cont'>
              <div className='list-box'>
                <Listbox link='/inquiry/view'
                  title="2022년 대한심부전학회 개원의 연수강좌"
                  date="2022-08-31"
                  label="답변완료"
                />
                <Listbox link='/inquiry/view'
                  title="2022년 대한심부전학회 개원의 연수강좌"
                  date="2022-08-31"
                  label="답변완료"
                />
              </div>
            </div>
          )}
          {selectedCategory === 'replyWait' && (
            <div className='inquiry-cont'>
              <div className='list-box'>
                <Listbox link='/inquiry/view'
                  title="2022년 대한심부전학회 개원의 연수강좌"
                  date="2022-08-31"
                  labelClass="wait"
                  label="답변대기"
                />
              </div>
            </div>
          )}
          <div className='btn-wrap btm'>
            <Link to='/inquiry/write' className='btn-base btn-more'>문의하기</Link>
          </div>
        </Layout>
      </div>
    </>
  )
}

export default Inquiry