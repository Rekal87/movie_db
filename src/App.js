import React from "react";
import Header from "./components/Header";
import Inputbar from "./components/Inputbar";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Notes from "./components/Notes";
import Faq from "./components/Faq";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Inputbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
}

export default App;
