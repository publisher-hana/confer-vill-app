import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 경로가 변경될 때 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
const MainLayout = () => {
  return (
    <div className="mb-wrap">
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout