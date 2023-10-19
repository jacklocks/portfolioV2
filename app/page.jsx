import Image from "next/image";
import styles from "./page.module.css";
import Title from "./components/Title";

export default function Home() {
  return (
<>
<main className={styles.mainContainer}>
  <Title />
</main>
</>
  )
}
