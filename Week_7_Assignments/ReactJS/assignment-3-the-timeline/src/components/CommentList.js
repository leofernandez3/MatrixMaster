export default function CommentList({ comments }) {
  return (
    <div>
      <h6>Comments:</h6>

      {comments.length === 0 ? (
        <p>No comments</p>
      ) : (
        comments.map((c) => (
          <div key={c._id} className="border p-2 mb-1">
            {c.body}
          </div>
        ))
      )}
    </div>
  );
}