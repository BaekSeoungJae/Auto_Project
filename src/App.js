import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MainForm from "./common/MainForm";
import MainPage from "./pages/main/MainPage";
import KakaoMap from "./pages/map/KakaoMap";
import LsPage from "./pages/Ls/LsPage";
import WeatherPage from "./pages/weather/WeatherPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainForm />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/kakaomap" element={<KakaoMap />} />
          <Route path="/lspage" element={<LsPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
