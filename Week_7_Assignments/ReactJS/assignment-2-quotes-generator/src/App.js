import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("");

  const fetchQuote = () => {
    const callbackName = "jsonpCallback_" + Date.now();

    const script = document.createElement("script");

    script.src = `https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=${callbackName}`;

    window[callbackName] = (data) => {
      setQuote(data.quoteText);
      setAuthor(data.quoteAuthor || "Unknown");

      delete window[callbackName];
      document.body.removeChild(script);
    };

    script.onerror = () => {
      setQuote("Failed to load quote. Try again.");
      setAuthor("");
    };

    document.body.appendChild(script);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      {/* HEADER */}
      <div className="header">
        <h1>Quote Generator</h1>
      </div>

      {/* QUOTE SECTION */}
      <div className="content">
        <p className="quote">"{quote}"</p>
        <h3 className="author">{author}</h3>

        <button className="btn" onClick={fetchQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;