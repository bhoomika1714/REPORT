
// StrayAnimalReport.js
import React from 'react';

const StrayAnimalReport = () => {
  return (
    <div>
      <h1>Stray Animal Report</h1>
      <form>
        <label>Location:</label>
        <input type="text" placeholder="Enter location" required />

        <label>Description:</label>
        <textarea placeholder="Describe the situation" required></textarea>

        <label>Upload Image:</label>
        <input type="file" accept="image/*" />

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default StrayAnimalReport;
