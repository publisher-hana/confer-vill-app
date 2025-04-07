import React, { useState } from 'react'
import NavHeader from '../../components/common/NavHeader'
import Layout from '../../components/common/Layout'
import '../pages.scss'
import FilterBox from './FilterBox'

const BrandZone = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openFilter = () => {
    setIsOpen(true);
  };
  const closeFilter = () => {
    setIsOpen(false);  
  };
  const [selectedCategory, setSelectedCategory] = useState('medicine');
  return (
    <>
      <NavHeader navTitle="브랜드존" />
      <div className='container-wrap'>
        <Layout>
          <div className='brand-zone'>
            <div className='category-tabs'>
              <button 
                className={selectedCategory === 'medicine' ? 'on' : ''} 
                onClick={()=>setSelectedCategory('medicine')}>의약품</button>
              <button 
                className={selectedCategory === 'medicalDevice' ? 'on' : ''} 
                onClick={()=>setSelectedCategory('medicalDevice')}>의료기기</button>
            </div>
            <div className='cont-top flex'>
              <div className="total-count">
                전체 <em className="point">54</em>건
              </div>
              <button className='filter' onClick={openFilter}><span className='blind'>필터</span></button>
            </div>
            <div className='products-boxes'>
              <PrdBox img="/confer-vill-app/images/brand_ex01.jpg" cate="순환기" prdTitle="릭시아나" subTitle="항응고제" desc="출혈안전성과 복약편의성 두 가지를 동시에 만족하는 유일한 항응고제" />
              <PrdBox img="/confer-vill-app/images/brand_ex02.jpg" cate="호흡기" prdTitle="에클리라" subTitle="COPD 흡입 치료제 (LAMA)" desc="하루 2회 사용으로 초기 COPD 환자의 24시간 호흡곤란 증상을 개선" />
              <PrdBox img="/confer-vill-app/images/brand_ex03.jpg" cate="소화기" prdTitle="바이오탑에스/바이오탑디/바이오탑하이" subTitle="정장제" desc="균주의 차이는 효과의 차이! 산소 유무에 따라 작용하는 3종 균주 배합" />
              <PrdBox img="/confer-vill-app/images/brand_ex05.jpg" cate="순환기" prdTitle="대웅로수바스타틴" subTitle="COPD 흡입 치료제 (LAMA + LABA)" desc="강력한 LDL-C 강하효과, 죽상동맥경화증 진행지연 적응중" />
              <PrdBox img="/confer-vill-app/images/brand_ex05.jpg" cate="호흡기" prdTitle="듀어클리어" subTitle="고지혈증치료제" desc="하루 2회 사용으로 중등도 이상 COPD 환자의 24시간 호흡곤란 증상을 개선" />
            </div>
            <div className='btn-wrap btm'>
              <button className='btn-base line btn-more'>더보기</button>
            </div>
          </div>
        </Layout>
      </div>
      <FilterBox isOpen={isOpen} closeFilter={closeFilter} />
    </>
  )
}

export const PrdBox = ({img, cate,prdTitle,subTitle,desc}) => {
  return(
    <div className='box flex'>
      <div className='left'>
        <figure><img src={img} alt=''/></figure>
        <button className='btn-detail'>자세히보기</button>
      </div>
      <div className='info'>
        <span className='md-cate'>{cate}</span>
        <strong className='title'>{prdTitle}</strong>
        <span className='sub-title'>{subTitle}</span>
        <p className='desc'>{desc}</p>
      </div>
        
    </div>
  )
}

export default BrandZone