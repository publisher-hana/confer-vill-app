import React from 'react'
import { Link } from 'react-router-dom'

const BoxCont = ({img,title,date,rating,payLabel,labels}) => {
  return (
    <>
      <Link to="/conference" className='box-cont confer-info'>
        <figure>
          {payLabel && <span className="pay-label">유료</span>}
          <img
            src={img || '/confer-vill-app/images/default_img.jpg'}
            alt="Dr.ville 컨퍼런스 기본 이미지"
          />
        </figure>
        <div className='detail'>
          <div className="title-wrap">
            <div className='labels'>
              {labels.map((label, i) => {
                if (label === 'closed') return <span key={i} className='ico-label closed'>신청마감</span>;
                if (label === 'e-test') return <span key={i} className='ico-label e-test'>E-TEST</span>;
                if (label === 'end') return <span key={i} className='ico-label end'>종료</span>;
                return null;
              })}
            </div>
            <strong className="title">{title}</strong>
          </div>
          <ul className='info-list'>
            <li className='flex'>진행기간:
             <span>{date}</span>
            </li>
            <li>평점: {rating}점</li>
          </ul>
        </div>
      </Link>
    </>
  )
}

export default BoxCont