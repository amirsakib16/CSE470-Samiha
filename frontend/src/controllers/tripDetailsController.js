export const getUserTrips = async (userEmail) => {
  try {
    const response = await fetch(`http://localhost:5000/api/tripDetails/user/${userEmail}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch trips");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getUserTrips:", error);
    throw error;
  }
};
