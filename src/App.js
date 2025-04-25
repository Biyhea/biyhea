import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout           from './components/Layout';
import Home             from './pages/Home';
import Signup           from './pages/Signup';
import Login            from './pages/Login';
import Profile          from './pages/Profile';
import Participate      from './pages/Participate';
import Vote             from './pages/Vote';
import Leaderboard      from './pages/Leaderboard';
import PublicChat       from './pages/PublicChat';
import PrivateMessages  from './pages/PrivateMessages';
import AdminPanel       from './pages/AdminPanel';
import Reglement        from './pages/Reglement';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/signup"        element={<Signup />} />
          <Route path="/login"         element={<Login />} />
          <Route path="/profile"       element={<Profile />} />
          <Route path="/participate"   element={<Participate />} />
          <Route path="/vote"          element={<Vote />} />
          <Route path="/leaderboard"   element={<Leaderboard />} />
          <Route path="/chat"          element={<PublicChat />} />
          <Route path="/messages"      element={<PrivateMessages />} />
          <Route path="/admin"         element={<AdminPanel />} />
          <Route path="/reglement"     element={<Reglement />} />
        </Routes>
      </Layout>
    </Router>
  );
}
