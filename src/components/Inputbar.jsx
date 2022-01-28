import React from "react";

function Inputbar() {
  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a movie"
          aria-label="Search for a movie"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Inputbar;
