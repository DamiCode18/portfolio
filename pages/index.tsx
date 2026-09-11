import type { NextPage } from "next";
import Seo from "../components/Seo";
import Hero from "../components/sections/Hero";
import Work from "../components/sections/Work";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Seo description="Damilare Adebayo — software engineer with 7+ years of experience building fast, accessible web applications with React and Next.js." />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </>
  );
};

export default Home;
