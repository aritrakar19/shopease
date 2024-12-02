import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './pages/home/HomePage';
import NoPage from './pages/noPage/NoPage';

function App() {
  return (
    <>
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nopage" element={<NoPage />} />
        </Routes>
      </Router>
      </div>
    </>
  )
}

export default App