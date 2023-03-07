import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Solutions from './components/Solutions';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/solutions' element={<Solutions />} />
      </Routes>
    </Router>
  );
}

export default App;
