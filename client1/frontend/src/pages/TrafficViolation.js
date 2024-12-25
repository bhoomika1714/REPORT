// TrafficViolation.js
import React from 'react';

const TrafficViolation = () => {
  return (
    <div>
      <h1>Traffic Violation Report</h1>
      <form>
        <label>Location:</label>
        <input type="text" placeholder="Enter location" required />

        <label>Vehicle Number:</label>
        <input type="text" placeholder="Enter vehicle number" required />

        <label>Violation Details:</label>
        <textarea placeholder="Describe the violation" required></textarea>

        <label>Upload Image/Video:</label>
        <input type="file" accept="image/*, video/*" />

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default TrafficViolation;