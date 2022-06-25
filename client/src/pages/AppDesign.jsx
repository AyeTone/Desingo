import React from "react";
import { ProjectLinks } from "../components";
import { Header, Project } from "../components/UI";
import AirFilter from "../assets/app-design/desktop/image-airfilter.jpg";
import Eyecam from "../assets/app-design/desktop/image-eyecam.jpg";
import FaceIt from "../assets/app-design/desktop/image-faceit.jpg";
import LoopStudios from "../assets/app-design/desktop/image-loopstudios.jpg";
import Todo from "../assets/app-design/desktop/image-todo.jpg";

const AppDesign = () => {
  return (
    <main>
      <Header
        title="App Design"
        desc="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <section className="project-list">
        <Project
          img={AirFilter}
          title="Air Filter"
          desc="Solving the problem of poor indoor air quality by filtering the air"
        />
        <Project
          img={Eyecam}
          title="Eyecam"
          desc="Product that lets you edit your favorite photos and videos at any time"
        />
        <Project
          img={FaceIt}
          title="FaceIt"
          desc="Get to meet your favorite internet superstar with the faceit app"
        />
        <Project
          img={Todo}
          title="Todo"
          desc="A todo app that features cloud sync with light and dark mode"
        />
        <Project
          img={LoopStudios}
          title="LoopStudios"
          desc="A VR experience app made for Loopstudios"
        />
      </section>
      <ProjectLinks isApp={true} />
    </main>
  );
};

export default AppDesign;
