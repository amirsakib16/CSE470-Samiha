import React, { useEffect, useState } from "react";

function TripDetails() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      const userEmail = localStorage.getItem("userEmail");
      console.log("📨 Email from localStorage:", userEmail);

      if (userEmail) {
        try {
          const response = await fetch(`http://localhost:5000/api/tripDetails/user/${userEmail}`);
          const data = await response.json();
          console.log("📦 Trips fetched:", data);
          setTrips(data);
        } catch (error) {
          console.error("❌ Failed to fetch trips:", error);
        }
      }

      setLoading(false);
    };

    fetchTrips();
  }, []);

  if (loading) return <p>Loading trip details...</p>;

  return (
    <div className="trip-details-container">
      <h2>Your Trip Details</h2>
      {trips.length === 0 ? (
        <p>No trips found.</p>
      ) : (
        <ul>
          {trips.map((trip) => (
            <li key={trip._id}>
              <h3>{trip.destination}</h3>
              <p><strong>Start Date:</strong> {trip.startDate?.slice(0, 10)}</p>
              <p><strong>End Date:</strong> {trip.endDate?.slice(0, 10)}</p>
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
