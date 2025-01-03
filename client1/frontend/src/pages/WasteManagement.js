import React, { useState } from "react";
import axios from "axios";
import "./WasteManagement.css";

const WasteManagement = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    location: "",
    description: "",
    image: null,
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate the name field: no numbers and max 50 characters
    if (name === "name" && !/^[A-Za-z\s]*$/.test(value)) {
      return;
    }
    if (name === "name" && value.length > 50) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Restrict file uploads to image types only
    if (file && !file.type.startsWith("image/")) {
      alert("Please upload only image files.");
      return;
    }

    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/waste-reports/create",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setSuccessMessage(response.data.message || "Your report has been successfully submitted!");
    } catch (error) {
      console.error("Error submitting report:", error);
      setSuccessMessage("Failed to submit the report. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="card d-flex flex-row">
        <div className="left-side">
          <img src="/assets/images/SAVECITY.png" alt="Waste Management" className="image" />
        </div>
        <div className="right-side">
          <h2>Report Waste</h2>
          <form id="reportForm" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name (max 50 characters)"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Title Input */}
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter a title for the report"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Location Dropdown */}
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <select
                className="form-control"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Select a location
                </option>
                <option value="Hubli">Hubli</option>
                <option value="Dharwad">Dharwad</option>
              </select>
            </div>

            {/* Description Input */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="4"
                placeholder="Describe the issue"
                value={formData.description}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            {/* Image Upload */}
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Upload Image</label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={handleFileChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>

          {/* Success/Error Message */}
          {successMessage && (
            <div className={`mt-3 fw-bold ${successMessage.includes("successfully") ? "text-success" : "text-danger"}`}>
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WasteManagement;
