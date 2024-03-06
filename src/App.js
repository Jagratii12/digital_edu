import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/home/index";
import QuizPage from "./pages/quiz-page/index";
import Nextpage from "./pages/nextpage/nextpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/quiz-page" element={<QuizPage />} />
          <Route path="/pages/nextpage" element={<Nextpage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
