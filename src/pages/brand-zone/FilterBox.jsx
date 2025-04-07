import React from 'react'
export const brandTabs = [
  {id: 2,category: "대웅제약",},
  {id: 3,category: "한국다이찌산쿄",},
  {id: 4,category: "한국아스텔라스제약",},
  {id: 5,category: "LG화학",},
  {id: 6,category: "한올바이오파마",},
  {id: 7,category: "일양약품",},
  {id: 8,category: "삼성바이오에피스",},
  {id: 8,category: "SK바이오사이언스",},
  {id: 9,category: "대웅바이오",},
  {id: 10,category: "한국룬드벡",},
  {id: 11,category: "한국머크",},
]

const FilterBox = ({isOpen, closeFilter}) => {
  return (
    <>
      <div className={`filter-box  ${isOpen ? 'open' : ""}`}>
        <div className='nav-header filter'>
          <div className='container'>
            <button className='prev' onClick={closeFilter}></button>
            <h2>필터</h2>
          </div>
        </div>
        <div className='container'>
          <div className='filter-cont'>
            <p className="desc">제약사 선택 후 질환별 의약품/의료기기를 확인하세요.</p>
            <h3 className='title'>제약사</h3>
            <ul className='filter-list grid'>
              <li>
                <button className='on'>전체</button>
              </li>
              {brandTabs.map((item, i) => (
                <li key={i}>
                  <button>{item.category}</button>
                </li>
              ))}
            </ul>
            <h3 className='title'>의약품</h3>
            <ul className='filter-list grid'>
              <li>
                <button className='on'>전체</button>
              </li>
              {brandTabs.map((item, i) => (
                <li key={i}>
                  <button>{item.category}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className='filter-btns'>
            <button className='reset'>초기화</button>
            <button>선택 적용</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterBox