import React from "react";
import { Details, Hero, ProjectLinks } from "../components";


const Home = () => {
  return (
    <main className="home">
      <Hero />
      <ProjectLinks isHome={true} />
      <Details />
    </main>
  );
};

export default Home;
