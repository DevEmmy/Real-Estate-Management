import './App.css';
import LandingPage from './Components/Others/LandingPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Auth from './Components/Others/Auth';
import RealEstate from './Components/Others/RealEstate';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/auth' element={<Auth />}/> 
        <Route path='/real-estate' element={<RealEstate />} />
      </Routes>
      
    </Router>
  );
}

export default App;
