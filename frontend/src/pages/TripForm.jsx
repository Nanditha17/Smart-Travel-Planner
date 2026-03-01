import { useState } from "react";

function TripForm() {

  const [formData, setFormData] = useState({
    tripName: "",
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 1,
    budget: "",
    tripType: "",
    notes: ""
  });

  const [itinerary, setItinerary] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGenerate = () => {
    setItinerary(
`Trip: ${formData.tripName}

Day 1: Explore ${formData.destination}
Day 2: Visit top attractions
Day 3: Relax and enjoy local cuisine`
    );
  };

  return (
    <div className="container">
      <h2>Plan Your Trip</h2>

      <label>Trip Name</label>
      <input name="tripName" onChange={handleChange} />

      <label>Destination</label>
      <input name="destination" onChange={handleChange} />

      <label>Start Date</label>
      <input type="date" name="startDate" onChange={handleChange} />

      <label>End Date</label>
      <input type="date" name="endDate" onChange={handleChange} />

      <label>Number of Travelers</label>
      <input type="number" name="travelers" onChange={handleChange} />

      <label>Budget</label>
      <input name="budget" onChange={handleChange} />

      <label>Trip Type</label>
      <select name="tripType" onChange={handleChange}>
        <option value="">Select a type</option>
        <option value="Relaxation">Relaxation</option>
        <option value="Adventure">Adventure</option>
        <option value="Family">Family</option>
        <option value="Luxury">Luxury</option>
        <option value="Budget">Budget</option>
      </select>

      <label>Additional Notes</label>
      <textarea name="notes" rows="3" onChange={handleChange}></textarea>

      <button onClick={handleGenerate}>
        Generate Itinerary
      </button>

      {itinerary && (
        <div className="itinerary-card">
          <div className="section-title">Your Travel Plan</div>
          <p style={{ whiteSpace: "pre-line" }}>{itinerary}</p>
        </div>
      )}
    </div>
  );
}

export default TripForm;