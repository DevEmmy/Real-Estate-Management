import './App.css';
import LandingPage from './Components/Others/LandingPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Auth from './Components/Others/Auth';
import RealEstate from './Components/Others/RealEstate';
import Cars from './Components/Others/Cars';
import Latest from './Components/Others/Latest';
import About from './Components/Others/About';
import PageError from './Components/Globals/PageError';
import Blog from './Components/Others/Blog';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/auth' element={<Auth />}/> 
        <Route path='/real-estate' element={<RealEstate />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/latest' element={<Latest />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      
    </Router>
  );
}

export default App;
