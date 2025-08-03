// src/pages/TripDetails.jsx
import React, { useEffect, useState } from "react";
import { getUserTrips } from "../controllers/tripDetailsController"; // frontend controller

function TripDetails() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      getUserTrips(userEmail)
        .then(setTrips)
        .catch((err) => console.error("Failed to fetch trips:", err));
    }
  }, []);

  return (
    <div>
      <h2>My Trips</h2>
      {trips.length === 0 ? (
        <p>No trips created yet.</p>
      ) : (
        <ul>
          {trips.map((trip) => (
            <li key={trip._id}>
              <h4>{trip.destination}</h4>
              <p><strong>Start:</strong> {new Date(trip.startDate).toLocaleDateString()}</p>
              <p><strong>End:</strong> {new Date(trip.endDate).toLocaleDateString()}</p>
              <p><strong>Budget:</strong> ${trip.budget}</p>
              <p><strong>Description:</strong> {trip.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TripDetails;
