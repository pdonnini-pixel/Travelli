import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignatureCollection from './pages/SignatureCollection';
import UrbanFlow from './pages/UrbanFlow';
import TrackRecord from './pages/TrackRecord';
import Method from './pages/Method';
import Intelligence from './pages/Intelligence';
import About from './pages/About';
import TravelliIntelligence from './components/TravelliIntelligence';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import ProtectedRoute from './components/admin/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/*"
            element={
              <div className="min-h-screen">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signature" element={<SignatureCollection />} />
                  <Route path="/urban" element={<UrbanFlow />} />
                  <Route path="/track-record" element={<TrackRecord />} />
                  <Route path="/intelligence" element={<Intelligence />} />
                  <Route path="/method" element={<Method />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Home />} />
                </Routes>
                <TravelliIntelligence />
              </div>
            }
          />
        </Routes>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
