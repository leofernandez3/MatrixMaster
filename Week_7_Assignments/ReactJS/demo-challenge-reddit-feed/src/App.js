import React, { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = () => {
    if (!title || !content) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
      votes: 0,
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
  };

  const upvote = (id) => {
    const updated = posts.map((post) =>
      post.id === id ? { ...post, votes: post.votes + 1 } : post
    );
    setPosts(updated);
  };

  const sortedPosts = [...posts].sort((a, b) => b.votes - a.votes);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Demo Challenge Reddit Feed</h1>

      {/* CREATE POST FORM */}
      <div className="border p-3 mb-4">
        <h5>Create a Post</h5>

        <input className="form-control mb-2" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <textarea className="form-control mb-2" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />

        <button className="btn btn-outline-primary inline btn-md" onClick={addPost}>Post</button>
      </div>

      {sortedPosts.length === 0 ? (
        <p className="text-center">No posts</p>
      ) : (
        sortedPosts.map((post) => (
          <div key={post.id} className="border p-3 mb-4">
            <div className="card-body">
              <h5>{post.title}</h5>
              <p>{post.content}</p>

              <div className="d-flex justify-content-between align-items-center">
                <span className="btn bg-dark text-white">Uploader: {post.votes} upvotes</span>
                <button className="btn btn-outline-success btn-sm" onClick={() => upvote(post.id)}>Upvote</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default App;