import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import About from './components/about';
import Events from './components/events';
import Education from './components/education';
import HeartMath from './components/heartmath';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        < Header />
        <Routes>
          <Route path="/circuscowgirl" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/events" element={< Events />} />
          <Route path="/education" element={< Education />} />
          <Route path="/heartmath" element={< HeartMath />} />
          <Route path="/contact" element={< Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
