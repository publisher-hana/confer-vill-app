import React from 'react'
import Title from '../../components/common/Title'
import Layout from '../../components/common/Layout'
import BoxCont from './BoxCont'
import '../pages.scss'

const Home = () => {
  return (
    <main className='container-wrap main'>
      <Layout>
        <div className='cont-title-wrap'>
          <Title title="진행중인 웹 심포지엄"></Title>
          <span>4</span>
        </div>
        <div className='box-cont-wrap'>
          <BoxCont 
            title="제 1회 Korea Microbiome Consortium (KMBC) 라이브 심포지엄 (한국표준과학연구원 주관)"
            date="2022년 7월 3일 (금) 09:00 ~ 17:00"
            rating="4"
            payLabel='pay'
            labels={['closed', 'e-test']} 
          />
          <BoxCont 
            img="/confer-vill-app/images/main_img02.jpg"
            title="2022년 대한심부전학회 개원의 연수강좌 온라인 생중계 "
            date="2022년 7월 3일 (금) 09:00 ~ 17:00"
            rating="4"
            labels={['end']} 
          />
          <BoxCont 
            img="/confer-vill-app/images/main_img02.jpg"
            title="2022년 대한심부전학회 개원의 연수강좌 온라인 생중계 "
            date="2022년 7월 3일 (금) 09:00 ~ 17:00"
            rating="4"
            payLabel='pay'
            labels={['end']} 
          />
          <BoxCont 
            title="2022년 대한심부전학회 개원의 연수강좌 온라인 생중계 "
            date="2022년 7월 3일 (금) 09:00 ~ 17:00"
            rating="4"
            payLabel='pay'
            labels={['end']} 
          />
        </div>
      </Layout>
        
    </main>
  )
}

export default Home