import React from "react";
import { Summary } from "../components/Summary";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { CopyrightFooter } from "../components/CopyrightFooter";
import { Technologies } from "../components/Technologies";
import { Contact } from "../components/Contact";

export const Home = () => {
  return (
    <>
      <Summary />
      <Experience />
      <Skills />
      <Technologies />
      <Contact />
      <CopyrightFooter />
    </>
  );
};
