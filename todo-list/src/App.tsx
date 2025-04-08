import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'

// import NoiDung from './pages/NoiDung';

function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* <Link to="/">Trang chủ</Link> |  */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
