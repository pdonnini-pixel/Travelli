import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignatureCollection from './pages/SignatureCollection';
import UrbanFlow from './pages/UrbanFlow';
import TrackRecord from './pages/TrackRecord';
import Method from './pages/Method';
import Intelligence from './pages/Intelligence';
import TravelliIntelligence from './components/TravelliIntelligence';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signature" element={<SignatureCollection />} />
          <Route path="/urban" element={<UrbanFlow />} />
          <Route path="/track-record" element={<TrackRecord />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/method" element={<Method />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
        <TravelliIntelligence />
      </div>
    </LanguageProvider>
  );
}

export default App;
