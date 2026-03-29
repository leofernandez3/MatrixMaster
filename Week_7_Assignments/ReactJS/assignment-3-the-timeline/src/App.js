import { useEffect, useState } from "react";
import API from "./api";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await API.get("/get-posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mt-4">
      <h1>The Timeline (React)</h1>

      <AddPost refresh={fetchPosts} />

      <PostList posts={posts} refresh={fetchPosts} />
    </div>
  );
}

export default App;