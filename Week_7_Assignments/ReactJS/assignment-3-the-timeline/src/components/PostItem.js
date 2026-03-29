import { useState, useEffect } from "react";
import API from "../api";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

export default function PostItem({ post, refresh }) {
  const [edit, setEdit] = useState(false);
  const [body, setBody] = useState(post.body);
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await API.get(`/get-post-comments/${post._id}`);
    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const deletePost = async () => {
    await API.delete(`/delete-post/${post._id}`);
    refresh();
  };

  const updatePost = async () => {
    await API.put(`/edit-post/${post._id}`, { body });
    setEdit(false);
    refresh();
  };

  return (
    <div className="card mb-3">
      <div className="card-body">

        {edit ? (
          <>
            <textarea
              className="form-control mb-2"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <button className="btn btn-success btn-sm me-2" onClick={updatePost}>
              Save
            </button>
            <button className="btn btn-secondary btn-sm" onClick={() => setEdit(false)}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <p>{post.body}</p>

            <button className="btn btn-warning btn-sm me-2" onClick={() => setEdit(true)}>
              Edit
            </button>

            <button className="btn btn-danger btn-sm" onClick={deletePost}>
              Delete
            </button>
          </>
        )}

        <hr />

        <CommentList comments={comments} />

        <AddComment postId={post._id} refresh={fetchComments} />
      </div>
    </div>
  );
}