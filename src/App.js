import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">Bienvenue sur Biyhea</h1>
      <p className="mt-4 text-gray-600">Concours photo en ligne – Gagnez des prix chaque semaine !</p>
      <div className="mt-6">
        <Link to="/participate" className="text-blue-500 underline">Participer au concours</Link>
      </div>
    </div>
  );
}

function Reglement() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Règlement du concours</h1>
      <p>Chaque participant doit soumettre 3 photos en lien avec le thème de la semaine.</p>
      <p>Le vote se fait par étoiles (1 à 5) et les scores sont cumulés.</p>
    </div>
  );
}

function Participate() {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Soumettre vos 3 photos</h1>
      <p className="mb-2 text-sm text-gray-600">(Formulaire d'envoi ici...)</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reglement" element={<Reglement />} />
        <Route path="/participate" element={<Participate />} />
      </Routes>
    </Router>
  );
}