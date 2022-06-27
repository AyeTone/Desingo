import React from "react";
import { Details, Hero, ProjectLinks } from "../components";

const Home = () => {
  return (
    <main className="home">
      <Hero />
      <ProjectLinks />
      <Details />
    </main>
  );
};

export default Home;
