import { useState } from "react";
import API from "../api";

export default function AddComment({ postId, refresh }) {
  const [body, setBody] = useState("");

  const addComment = async () => {
    if (body.length < 25) {
      alert("Comment must be at least 25 characters");
      return;
    }

    await API.post(`/post-post-comment/${postId}`, { body });

    setBody("");
    refresh();
  };

  return (
    <div className="mt-2">
      <textarea
        className="form-control mb-1"
        placeholder="Add comment..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button className="btn btn-success btn-sm" onClick={addComment}>
        Add Comment
      </button>
    </div>
  );
}