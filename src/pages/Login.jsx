import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth }                       from '../firebase';
import { useNavigate }                 from 'react-router-dom';

export default function Login() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const navigate                = useNavigate();

  const handle = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">Connexion</h2>
      <input value={email} onChange={e=>setEmail(e.target.value)}
        placeholder="Email" className="w-full mb-2 p-2 border rounded" />
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)}
        placeholder="Mot de passe" className="w-full mb-4 p-2 border rounded" />
      <button onClick={handle} className="w-full bg-green-500 text-white py-2 rounded">Se connecter</button>
    </div>
}
