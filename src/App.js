import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        < Header />
        <Routes>
          <Route path="/circuscowgirl" element={< Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;