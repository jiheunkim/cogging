
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Mypage from './components/pages/Mypage';
import SignUp from './components/pages/SignUp';
import Register from './components/pages/Register';
import Community from './components/pages/Community';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;