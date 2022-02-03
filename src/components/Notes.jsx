import React from "react";
import "./notes.css";

function Notes() {
  return (
    <>
      <div className="container">
        <div>
          <h1>Hello World from Notes</h1>
        </div>
        <form>
          <div className="mb-3">
            <label for="FormControlInput1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="FormControlInput1"
              placeholder="Your title here"
            />
          </div>
          <div className="mb-3">
            <label for="FormControlTextarea1" className="form-label">
              Textarea
            </label>
            <textarea
              className="form-control"
              id="FormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Add
          </button>
        </form>
        <div className="list-group"></div>
      </div>
    </>
  );
}

export default Notes;
