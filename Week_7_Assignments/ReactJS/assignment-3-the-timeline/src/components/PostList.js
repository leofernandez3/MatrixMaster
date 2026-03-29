import PostItem from "./PostItem";

export default function PostList({ posts, refresh }) {
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} refresh={refresh} />
      ))}
    </div>
  );
}