import React from "react";
import "./App.css"
import Home from "./Components/Home";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";

const App = () => {
  return <div className="App">
    <Home />
    <About />
    <Work />
    <Testimonial />
    <Footer/>
  </div>;
};

export default App;

