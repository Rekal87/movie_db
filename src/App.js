import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <div className="container mx-auto px-2">
        <div className="w-80 bg-gray-100 mx-auto top-10 relative">
          <label className="text-sm text-gray-600 false" for="email">
            Email Address
          </label>
          <div>
            <input
              type="email"
              name="email"
              className="border border-gray-300 rounded-sm outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
            />
            <span className="mt-2 flex text-gray-600 text-xs">
              Please enter your work email address
            </span>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default App;
