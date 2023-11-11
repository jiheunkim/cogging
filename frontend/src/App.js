
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import Mypage from './components/pages/Mypage';
import SignUp from './components/pages/SignUp';
import Register from './components/pages/Register';
import Challenge from './components/pages/Challenge';
import Community from './components/pages/Community';
import PloggingWrite from './components/pages/PloggingWrite/body';
import ReviewWrite from './components/pages/ReviewWrite/body';
import CommunityWrite from './components/pages/CommunityWrite/body';
import PloggingList from './components/pages/PloggingList/body';
import CommunityList from './components/pages/CommunityList/body';
import CommunityFeed from './components/pages/CommunityFeed/body';
import CommunityFix from './components/pages/CommunityFix/body';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plogging-write" element={<PloggingWrite/>} />
        <Route path="/review-write" element={<ReviewWrite/>}/>
        <Route path="/community-write" element={<CommunityWrite/>}/>
        <Route path="/plogging-list" element={<PloggingList/>}/>
        <Route path="/community-list" element={<CommunityList/>}/>
        <Route path='/community-feed' element={<CommunityFeed/>}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="/community-fix" element = {<CommunityFix/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;