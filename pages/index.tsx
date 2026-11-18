import type { NextPage } from "next";
import Seo from "../components/Seo";
import Hero from "../components/sections/Hero";
import Work from "../components/sections/Work";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Seo description="Damilare Adebayo — mobile engineer building React Native apps for iOS and Android, down to native Swift and Kotlin. 7+ years shipping products end to end." />
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
