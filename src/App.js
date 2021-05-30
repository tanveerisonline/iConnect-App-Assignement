import "./App.css";
import Navbar from "./components/Navbar";
import Study from "./components/Study";
import About from "./components/About";
import Cause from "./components/Cause";
import Eligible from "./components/Eligible";
import CollapsePage from "./components/CollapsePage";
import Features from "./components/Features";
import Journey from "./components/Journey";
import Forms from "./components/Forms";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import React from "react";
import FadeInSection from "./components/lib";
function App() {
  return (
    <div className="App">
      <FadeInSection>
        <Navbar />
        <Study />
        <About />
        <Cause />
        <Eligible />
        <CollapsePage />
        <Features />
        <Journey />
        <Forms />
        <Footer />
        <Contact
          Contact
          contact_heading="Contacts"
          email="support@iconnect.com"
          phone_no="+1 (0) 000 0000 001"
          contact_no="+1 (0) 000 0000 002"
          copyright="&#169; Copyright iConnect - All Rights Reserved"
        />
      </FadeInSection>
    </div>
  );
}

export default App;
