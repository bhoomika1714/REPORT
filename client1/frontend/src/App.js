import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SubmitReport from './pages/SubmitReport';
import Success from './pages/Success';
import Register from "./pages/Admin/Register";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ChangesWeHaveBrought from "./pages/ChangesWeHaveBrought";
import Login from './pages/Admin/Login';
import WasteManagement from './pages/WasteManagement';
import StrayAnimalReport from './pages/StrayAnimalReport';
import PotholeReport from './pages/PotholeReport';
import TrafficViolation from './pages/TrafficViolation';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submit/:reportType" element={<SubmitReport />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/changes" element={<ChangesWeHaveBrought />} />
        <Route path="/success" element={<Success />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/submit/waste" element={<WasteManagement />} />
        <Route path="/submit/stray-animal" element={<StrayAnimalReport />} />
        <Route path="/submit/pothole" element={<PotholeReport />} />
        <Route path="/submit/traffic" element={<TrafficViolation />} />
      </Routes>
    </Router>
  );
}

export default App;
