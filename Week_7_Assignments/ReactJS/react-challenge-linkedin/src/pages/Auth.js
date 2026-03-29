import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    let newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (email && !email.includes("@")) {
      newErrors.email = "Invalid email format";
    }

    if (password && password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const newUser = { name, email, password };
    const updated = [...users, newUser];

    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));

    alert("Registered successfully!");
  };

  const login = () => {
    let newErrors = {};

    if (!email) newErrors.loginEmail = "Email required";
    if (!password) newErrors.loginPassword = "Password required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      localStorage.setItem("loggedUser", JSON.stringify(found));
      navigate("/members");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">LinkedIn Login</h2>

      <div className="row">
        <div className="col-md-6 border p-3">
          <h5>Register</h5>
          {errors.name && <small className="text-danger">{errors.name}</small>}
          <input
            className="form-control mb-2"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}
          <input
            className="form-control mb-2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          {errors.password && (
            <small className="text-danger">{errors.password}</small>
          )}
          <input
            className="form-control mb-2"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-primary w-100" onClick={register}>
            Register
          </button>
        </div>

        <div className="col-md-6 border p-3">
          <h5>Login</h5>

          {errors.loginEmail && (
            <small className="text-danger">{errors.loginEmail}</small>
          )}
          <input
            className="form-control mb-2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          {errors.loginPassword && (
            <small className="text-danger">{errors.loginPassword}</small>
          )}
          <input
            className="form-control mb-2"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-success w-100" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}