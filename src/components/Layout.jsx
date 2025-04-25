import React, { useEffect, useState } from 'react';
import { Link, useNavigate }            from 'react-router-dom';
import { onAuthStateChanged, signOut }  from 'firebase/auth';
import { auth }                         from '../firebase';

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => onAuthStateChanged(auth, u => setUser(u)), []);
  const logout = async () => {
    await signOut(auth);
    navigate('/');
  };
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold text-blue-600">Biyhea</Link>
      <div className="space-x-4">
        <Link to="/participate" className="hover:text-blue-500">Participer</Link>
        <Link to="/leaderboard" className="hover:text-blue-500">Classement</Link>
        <Link to="/chat" className="hover:text-blue-500">Chat</Link>
        {user
          ? <>
              <Link to="/profile" className="hover:text-blue-500">Mon profil</Link>
              <button onClick={logout} className="text-red-500 hover:text-red-700">Déconnexion</button>
            </>
          : <Link to="/login" className="hover:text-blue-500">Se connecter</Link>
        }
      </div>
    </nav>
  );
}

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow p-6">{children}</main>
      <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Biyhea · 
        <Link to="/reglement" className="text-blue-500 underline ml-1">Règlement</Link>
      </footer>
    </div>
  );
}
