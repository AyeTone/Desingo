import React from "react";
import { Project } from "../components/UI";
import Header from "../components/UI/Header";

const WebDesign = () => {
  return (
    <main>
      <Header
        title="Web Design"
        desc="We build websites that serve as powerful marketing tools
      and bring memorable brnad experiences."
      />
      <section>
        <Project />
      </section>
    </main>
  );
};

export default WebDesign;
