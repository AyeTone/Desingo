import React from "react";
import { ProjectLinks } from "../components";
import { Header, Project } from "../components/UI";
import BoxedWater from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import Change from "../assets/graphic-design/desktop/image-change.jpg";
import Science from "../assets/graphic-design/desktop/image-science.jpg";

const GraphicDesign = () => {
  return (
    <main>
      <Header
        title="Graphic Design"
        desc="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <section className="project-list">
        <Project
          img={Change}
          title="Tim Brown"
          desc="A book cover designed for 
        Tim Brown’s new release, ‘Change’"
        />
        <Project
          img={BoxedWater}
          title="Boxed Water"
          desc="A simple packaging concept made for Boxed Water"
        />
        <Project
          img={Science}
          title="Science!"
          desc="A poster made in collaboration with the Federal Art Project"
        />
      </section>
      <ProjectLinks isGraphic={true} />
    </main>
  );
};

export default GraphicDesign;
