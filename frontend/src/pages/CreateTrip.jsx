import React, { useState } from "react";
import { createTrip } from "../controllers/tripController";

function CreateTrip() {
  const [formData, setFormData] = useState({
    userEmail: "",
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    description: "",
  });

    
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = localStorage.getItem("userEmail");
    const result = await createTrip(formData);
    if (result && result._id) {
      alert("✅ Trip created successfully!");
      setFormData({
        userEmail: "",
        destination: "",
        startDate: "",
        endDate: "",
        budget: "",
        description: "",
      });
    } else {
      alert("❌ Failed to create trip.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a Trip</h2>
      

      <input
        type="text"
        name="destination"
        placeholder="Destination"
        value={formData.destination}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
      />
      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
      />
      <input
        type="number"
        name="budget"
        placeholder="Budget"
        value={formData.budget}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Trip Description"
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit">Create Trip</button>
    </form>
  );
}

export default CreateTrip;
