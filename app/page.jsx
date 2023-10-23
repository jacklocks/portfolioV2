import Image from "next/image";
import Title from "./components/Title";
import About from "./components/About";
import AllProjects from "./components/AllProjects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Title />
        <About />
        <AllProjects />
        <Contact />
      </main>
    </>
  );
}
