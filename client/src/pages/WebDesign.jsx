import React from "react";
import { Project } from "../components/UI";
import Header from "../components/UI/Header";
import Express from "../assets/web-design/desktop/image-express.jpg";

const WebDesign = () => {
  return (
    <main>
      <Header
        title="Web Design"
        desc="We build websites that serve as powerful marketing tools
      and bring memorable brnad experiences."
      />
      <section className="project-list">
        <Project
          img={Express}
          title="Express"
          desc="A multi-carrier shipping website for ecommerce businesses"
        />
      </section>
    </main>
  );
};

export default WebDesign;
