import React, { useState, useEffect } from "react";

function App() {
  const [albums, setAlbums] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Loading albums...</p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h1 className="text-left mb-4">Demo Challenge (Albums)</h1>

      {/* SEARCH BAR */}
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search albums..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* RESULTS */}
      {filteredAlbums.length > 0 ? (
        <ul>
          {filteredAlbums.map((album) => (
            <li>{album.title}</li>
          ))}
        </ul>
      ) : (
        <div className="text-left mt-4">
          <p className="text-muted">
            No albums found for: <strong>{searchQuery}</strong>
          </p>
          <button
            className="btn btn-secondary"
            onClick={() => setSearchQuery("")}
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}

export default App;