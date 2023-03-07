import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import './components/style.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
