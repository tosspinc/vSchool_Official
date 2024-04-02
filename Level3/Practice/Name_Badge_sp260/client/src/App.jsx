import React, { useState } from 'react';
import NameBadgeComponent from './components/NameBadgeComponent';
import FormData from './components/FormData';
import './App.css';

export default function App() {
  const [nameBadges, setNameBadges] = useState([]);

  const handleFormSubmit = (data) => {
    setNameBadges([...nameBadges, data]);
  };

  return (
    <div className='App'>
      <FormData onSubmit={handleFormSubmit} /> {/* Ensure onSubmit prop is passed correctly */}
      {nameBadges.map((formData, index) => (
        <NameBadgeComponent formData={formData} key={index} index={index} />
      ))}
    </div>
  );
}
