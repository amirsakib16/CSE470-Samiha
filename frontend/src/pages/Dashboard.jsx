// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDashboardData } from "../controllers/dashboardController";

function Dashboard() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      getDashboardData(email).then((data) => setProfile(data.profile));
    }
  }, []);

  const goToCreateTrip = () => {
    navigate("/create-trip");
  };

  const goToTripDetails = () => {
    navigate("/trip-details");
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h2>Welcome, {profile.name}</h2>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Location:</strong> {profile.location}</p>
      <p><strong>Age:</strong> {profile.age}</p>
      <p><strong>NID:</strong> {profile.nidNo}</p>

      <button onClick={goToCreateTrip}>➕ Create Trip Plan</button>
      <button onClick={goToTripDetails}>📋 View My Trips</button>
    </div>
  );
}

export default Dashboard;
