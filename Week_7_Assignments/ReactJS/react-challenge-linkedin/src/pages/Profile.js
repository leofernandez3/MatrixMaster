import { useParams, useNavigate } from "react-router-dom";
import { members } from "../data";

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = members.find((m) => m.id === Number(id));
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between">
        <h5>Welcome, {loggedUser?.name}</h5>

        <div>
          <button
            className="btn btn-secondary btn-sm me-2"
            onClick={() => navigate("/members")}
          >
            Back
          </button>

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
      </div>

      <div className="border p-3 mt-3">
        <h4>{user?.name}</h4>
        <p>{user?.email}</p>
        <p>{user?.job}</p>
      </div>
    </div>
  );
}