import React from 'react'
import NavHeader from '../../components/common/NavHeader'
import Layout from '../../components/common/Layout'
import SelectItem from '../../components/form/SelectItem'
import { useNavigate } from 'react-router-dom';
export const options1 = [
  { value: "all", label: "전체" },
];
export const options2 = [
  { value: "", label: "입/퇴장관련" },
  { value: "", label: "평점조회" },
  { value: "", label: "영상끊김" },
  { value: "", label: "계정정보변경" },
  { value: "", label: "유입코드" },
  { value: "", label: "다시보기기" },
];
const InquiryWrite = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // -1은 한 단계 뒤로 가기
  };
  return (
    <>
      <NavHeader navTitle="문의하기" />
      <div className='container-wrap'>
        <Layout>
          <div className='inquiry-cont'>
            <form>
              <div className='forms'>
                <input type='text' placeholder='제목을 입력하세요' title='제목 입력' />
                <SelectItem 
                  placeholder="컨퍼런스 선택"
                  options={options1}
                />
                <SelectItem 
                  placeholder="문의항목 선택"
                  options={options2}
                />
                <textarea title="내용을 입력하세요" placeholder="내용을 입력하세요"></textarea>
              </div>
              <div className='btn-wrap btm'>
                <button className='btn-base gray' onClick={goBack}>취소</button>
                <button className='btn-base'>저장</button>
              </div>
            </form>
          </div>
        </Layout>
      </div>
    </>
  )
}

export default InquiryWrite