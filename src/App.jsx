import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer1.jsx';
import './components/Navbar.css';
import VisitingCProfile from './pages/visitingcprofile';
import VisitingCProfile2 from './pages/visitingcprofile2';
import VisitingCProfile3 from './pages/visitingcprofile3';
import VisitingCProfile4 from './pages/visitingcprofile4';
import VisitingCProfile5 from './pages/visitingcprofile5';
import VisitingCProfile6 from './pages/visitingcprofile6';
import VisitingCProfile7 from './pages/visitingcprofile7';
import VisitingCProfile8 from './pages/visitingcprofile8';
import VisitingCProfile9 from './pages/visitingcprofile9';
import VisitingCProfile10 from './pages/visitingcprofile10';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<><Home /><Footer /></>} />
        <Route path='/visiting-profile' element={<><VisitingCProfile /><Footer /></>} />
        <Route path='/visiting-profile2' element={<><VisitingCProfile2 /><Footer /></>} />
        <Route path='/visiting-profile3' element={<><VisitingCProfile3 /><Footer /></>} />
        <Route path='/visiting-profile4' element={<><VisitingCProfile4 /><Footer /></>} />
        <Route path='/visiting-profile5' element={<><VisitingCProfile5 /><Footer /></>} />
        <Route path='/visiting-profile6' element={<><VisitingCProfile6 /><Footer /></>} />
        <Route path='/visiting-profile7' element={<><VisitingCProfile7 /><Footer /></>} />
        <Route path='/visiting-profile8' element={<><VisitingCProfile8 /><Footer /></>} />
        <Route path='/visiting-profile9' element={<><VisitingCProfile9 /><Footer /></>} />
        <Route path='/visiting-profile10' element={<><VisitingCProfile10 /><Footer /></>} />
      </Routes>
    </>
  );
}

export default App;
