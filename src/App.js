import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Solutions from './components/Solutions';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/solutions' element={<Solutions />} />
      </Routes>
    </Router>
  );
}

export default App;
