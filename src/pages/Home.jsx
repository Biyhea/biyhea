import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">Bienvenue sur Biyhea</h1>
      <p className="mt-4 text-gray-600">Concours photo en ligne – Gagnez des prix chaque semaine !</p>
      <div className="mt-6 space-x-4">
        <Link to="/participate" className="bg-blue-500 text-white px-5 py-2 rounded">Participer</Link>
        <Link to="/leaderboard" className="bg-green-500 text-white px-5 py-2 rounded">Classement</Link>
      </div>
    </div>
  );
}
