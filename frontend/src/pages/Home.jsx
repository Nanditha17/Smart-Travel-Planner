import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

return (
  <div className="container">
    <h1>Smart Travel Planner</h1>
    <p style={{ textAlign: "center" }}>
      Plan smarter. Travel better.
    </p>

    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <button onClick={() => navigate("/plan")}>
        Plan My Trip
      </button>
    </div>
  </div>
);
}

export default Home;