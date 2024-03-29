import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import About from './components/about';
import Services from './components/services';
import Media from './components/media';
import HeartMath from './components/heartmath';
import Horsemanship from './components/horsemanship';
import Contact from './components/contact';
import Events from './components/events';
import Clinics from './components/clinics';
import Book from './components/book';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        < Header />
        <Routes>
          <Route path="/circuscowgirl" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/services" element={< Services />} />
          <Route path="/heartmath" element={< HeartMath />} />
          <Route path="/horsemanship" element={< Horsemanship />} />
          <Route path="/media" element={< Media />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/events" element={< Events />} />
          <Route path="/clinics" element={< Clinics />} />
          <Route path="/book" element={< Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
