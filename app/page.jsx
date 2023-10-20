import Image from "next/image";
import styles from "./page.module.css";
import Title from "./components/Title";
import About from "./components/About";

export default function Home() {
  return (
<>
<main className={styles.mainContainer}>
  <Title />
  <About />
</main>
</>
  )
}
