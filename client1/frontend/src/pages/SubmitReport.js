import React from 'react';
import { useParams } from 'react-router-dom';

const SubmitReport = () => {
  const { reportType } = useParams(); // Get the report type from the URL

  return (
    <div>
      <h1>{reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report</h1>
      {/* Render different forms based on reportType */}
      {reportType === 'waste' && (
        <div>
          <h2>Waste Management Form</h2>
          {/* Add form fields for waste management */}
        </div>
      )}
      {reportType === 'traffic' && (
        <div>
          <h2>Traffic Violation Form</h2>
          {/* Add form fields for traffic violation */}
        </div>
      )}
      {reportType === 'pothole' && (
        <div>
          <h2>Pothole Report Form</h2>
          {/* Add form fields for pothole report */}
        </div>
      )}
      {reportType === 'stray-animal' && (
        <div>
          <h2>Stray Animal Report Form</h2>
          {/* Add form fields for stray animal */}
        </div>
      )}
    </div>
  );
};

export default SubmitReport;
