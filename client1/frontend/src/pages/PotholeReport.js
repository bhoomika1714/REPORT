import React, { useState } from 'react';
import axios from 'axios';

const PotholeReport = () => {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/report/pothole', { location, description });
      alert('Report submitted successfully!');
    } catch (error) {
      alert('Failed to submit report.');
    }
  };

  return (
    <div>
      <h2>Pothole Report</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PotholeReport;