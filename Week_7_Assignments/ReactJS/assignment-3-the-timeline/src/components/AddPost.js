import { useState } from "react";
import API from "../api";

export default function AddPost({ refresh }) {
  const [body, setBody] = useState("");

  const handleSubmit = async () => {
    if (body.length < 25) {
      alert("Post must be at least 25 characters");
      return;
    }

    await API.post("/create-post", { body });

    setBody("");
    refresh();
  };

  return (
    <div className="mb-3">
      <textarea
        className="form-control mb-2"
        placeholder="Write your post..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button className="btn btn-primary" onClick={handleSubmit}>
        Add Post
      </button>
    </div>
  );
}