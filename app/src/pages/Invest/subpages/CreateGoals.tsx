import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateGoals() {
  const navigate = useNavigate();
  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-2xl mt-10 shadow-md">
      <h1 className="text-2xl font-bold mb-4">Create New Goal</h1>
      <p className="text-slate-600 mb-6">Setup your new target investment goal here.</p>
      <button onClick={() => navigate(-1)} className="px-4 py-2 bg-slate-200 rounded-lg text-sm font-semibold">
        Go Back
      </button>
    </div>
  );
}