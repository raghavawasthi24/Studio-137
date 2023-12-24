import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quiz from './pages/Quiz/Quiz';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
