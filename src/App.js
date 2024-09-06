import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MainForm from "./common/MainForm";
import MainPage from "./pages/MainPage";
import KakaoMap from "./pages/map/KakaoMap";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainForm />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/kakaomap" element={<KakaoMap />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
