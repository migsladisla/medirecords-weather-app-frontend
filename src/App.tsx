import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from 'routes/Home';
import CityWeather from 'routes/CityWeather';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country/:city/weather-forecast" element={<CityWeather />} />
      </Routes>
    </Router>
  );
}

export default App;
