import React from "react";

export default function QuoteBox({ quote, author, getQuote }) {
  return (
    <div className="container text-center mt-5">
      <div className="card p-4 shadow">
        <h4 className="mb-4">Quote Generator</h4>

        <p className="fs-5">"{quote}"</p>
        <h6 className="text-muted">- {author}</h6>

        <button className="btn btn-primary mt-3" onClick={getQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}