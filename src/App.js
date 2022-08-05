import './App.css';

import Home  from './pages/Home';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';


function App() {
  return (
<div>
  <Router>
    <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/page2'  element={<h1>page2</h1>} />
        <Route path='/page3'  element={<h1>page3</h1>} />

    </Routes>
    </Router>
</div>
  );
}

export default App;
