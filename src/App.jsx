/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}
