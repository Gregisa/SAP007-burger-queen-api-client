import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Hall } from "./pages/Hall";
import { AllOrders } from "./pages/AllOrders";
import { Kitchen } from "./pages/Kitchen";
import "./main.css";

function App() {
  return (
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<Login />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/hall" element={<Hall />} />
                  <Route exact path="/allorders" element={<AllOrders />} />
                  <Route exact path="/kitchen" element={<Kitchen />} />
              </Routes>
          </BrowserRouter>
      );
  };

export default App;
