import React from "react";
import { Project } from "../components/UI";
import Header from "../components/UI/Header";
import Express from "../assets/web-design/desktop/image-express.jpg";
import Transfer from "../assets/web-design/desktop/image-transfer.jpg";
import Photon from "../assets/web-design/desktop/image-photon.jpg";
import Builder from "../assets/web-design/desktop/image-builder.jpg";
import Blogr from "../assets/web-design/desktop/image-blogr.jpg";
import Camp from "../assets/web-design/desktop/image-camp.jpg";
import { ProjectLinks } from "../components";

const WebDesign = () => {
  return (
    <main className="web-design">
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
        <Project
          img={Transfer}
          title="Transfer"
          desc="Site for low-cost money transfers and sending money within seconds"
        />
        <Project
          img={Photon}
          title="Photon"
          desc="A state-of-the-art music player with high-resolution audio and DSP effects"
        />
        <Project
          img={Builder}
          title="Builder"
          desc="Connects users with local contractors based on their location"
        />
        <Project
          img={Blogr}
          title="Blogr"
          desc="Blogr is a platform for creating an online blog or publication"
        />
        <Project
          img={Camp}
          title="Camp"
          desc="Get expert training in coding, data, design, and digital marketing"
        />
      </section>
      <ProjectLinks isWeb={true} />
    </main>
  );
};

export default WebDesign;
