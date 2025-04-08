import { Route, Routes, useLocation  } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import Program from "./pages/conference/Program";
import Notice from "./pages/notice/Notice";
import NoticeView from "./pages/notice/NoticeView";
import BrandZone from "./pages/brand-zone/BrandZone";
import Login from "./pages/home/Login";
import Inquiry from "./pages/inquiry/Inquiry";
import InquiryView from "./pages/inquiry/InquiryView";
import InquiryWrite from "./pages/inquiry/InquiryWrite";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 경로가 변경될 때 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isWritePage = location.pathname === '/inquiry/write';
  return (
    <div className="mb-wrap">
      {isLoginPage ? <Header type="login" /> : <Header />}
      <ScrollToTop />
      <Routes>
        <Route path ="/" element={
          <Home />
        } />
        <Route path ="/login" element={
          <Login />
        } />
        <Route path ="/conference" element={
          <Program />
        } />
        <Route path ="/notice" element={
          <Notice />
        } />
        <Route path ="/notice/view" element={
          <NoticeView />
        } />
        <Route path ="/brand" element={
          <BrandZone />
        } />
        <Route path ="/inquiry" element={
          <Inquiry />
        } />
        <Route path ="/inquiry/view" element={
          <InquiryView />
        } />
        <Route path ="/inquiry/write" element={
          <InquiryWrite />
        } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
