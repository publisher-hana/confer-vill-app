import { Route,  HashRouter as Router, Routes, useLocation  } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import Program from "./pages/conference/Program";
import Notice from "./pages/notice/Notice";
import NoticeView from "./pages/notice/NoticeView";
import BrandZone from "./pages/brand-zone/BrandZone";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 경로가 변경될 때 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function App() {
  return (
    <Router>
      <div className="mb-wrap">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path ="/" element={
            <Home />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
