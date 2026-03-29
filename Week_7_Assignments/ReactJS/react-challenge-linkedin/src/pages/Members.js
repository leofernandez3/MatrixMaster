import { members } from "../data";
import { useNavigate } from "react-router-dom";

export default function Members() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between">
        <h4>Welcome, {user?.name}</h4>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            localStorage.removeItem("loggedUser");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>

      <h5 className="mt-3">LinkedIn Members</h5>

      {members.map((m) => (
        <div key={m.id} className="border p-2 mb-2 d-flex justify-content-between">
          <div>
            <strong>{m.name}</strong>
          </div>

          <button
            className="btn btn-primary btn-sm"
            onClick={() => navigate(`/profile/${m.id}`)}
          >
            View Profile
          </button>
        </div>
      ))}
    </div>
  );
}