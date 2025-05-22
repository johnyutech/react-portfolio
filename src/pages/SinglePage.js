import React from "react";
import { Home } from "./home";
import { Portfolio } from "./portfolio";
import { ContactUs } from "./contact";
import { About } from "./about";
import { Socialicons } from "../components/socialicons";

function SinglePage() {
  return (
    <div className="single-page">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Socialicons />
    </div>
  );
}

export default SinglePage; 