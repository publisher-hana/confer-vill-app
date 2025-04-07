import React from 'react'
import NavHeader from '../../components/common/NavHeader'
import '../pages.scss'
import './conference.scss'
import Layout from '../../components/common/Layout'
import Title from '../../components/common/Title'

const Program = () => {
  return (
    <>
      <NavHeader navTitle="2022년 대한심부전학회 개원의 연수강좌 온라인 생중계" />
      <div className='container-wrap'>
        <Layout>
          <div className='program-cont'>
            <div className='box-cont confer-info'>
              <figure>
                <span className="pay-label">유료</span>
                <img
                  src='/confer-vill-app/images/main_img02.jpg'
                  alt="KMA대한의사협회 온라인 학술대회회"
                />
              </figure>
              <div className='detail'>
                <div className="title-wrap">
                  <div className='labels'>
                    <span className='ico-label closed'>신청마감</span>
                    <span className='ico-label e-test'>E-TEST</span>
                  </div>
                  <strong className="title">2022년 대한심부전학회 개원의 연수강좌 온라인 생중계</strong>
                </div>
                <ul className='info-list'>
                  <li><span>평점:</span> 4점</li>
                  <li><span>주최:</span> 대한의사협회회</li>
                  <li><span>신청기간:</span>
                    2022년 7월 1일(수) ~ 7월 31일(금) 18:00
                  </li>
                  <li><span>진행일시:</span>
                      2022년 8월 7일(금) 09:00 ~ 17:00
                  </li>
                </ul>
              </div>
            </div>
            <div className='program'>
              <div className='container'>
                <Title title="Program" />
                <div className='buttons'>
                  <button className='on'>A룸</button>
                  <button>B룸</button>
                  <button>C룸</button>
                </div>
                <div className='program-boxes'>
                  <div className='box on'>
                    <span>08:00~09:00</span>
                    <span>홍길동 (닥터빌 소속)</span>
                    <strong className='title'>강의 타이틀이 들어갑니다.</strong>
                    <span>부제목: 부제목 타이틀틀</span>
                    <button className='btn-base'>입장하기</button>
                  </div>
                  <div className='box'>
                    <span>08:00~09:00</span>
                    <span>홍길동 (닥터빌 소속)</span>
                    <strong className='title'>강의 타이틀이 들어갑니다.</strong>
                    <span>부제목: 부제목 타이틀틀</span>
                    <button className='btn-base'>입장하기</button>
                  </div>
                  <div className='box'>
                    <span>08:00~09:00</span>
                    <span>홍길동 (닥터빌 소속)</span>
                    <strong className='title'>강의 타이틀이 들어갑니다.</strong>
                    <span>부제목: 부제목 타이틀틀</span>
                    <button className='btn-base'>입장하기</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  )
}

export default Program