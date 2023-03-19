import React from "react";
import Users from "./components/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import CustomNavbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomNavbar />
        <div className="d-flex justify-content-center align-items-center full-height">
          <div>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
