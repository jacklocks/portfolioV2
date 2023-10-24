import Image from "next/image";
import Title from "./components/Title";
import About from "./components/About";
import AllProjects from "./components/AllProjects";
import Contact from "./components/Contact";
import Mouse from "./components/Mouse";

export default function Home() {
  return (
    <>
      <Mouse />
      <Title />
      <About />
      {/* <AllProjects /> */}
      <Contact />
    </>
  );
}
