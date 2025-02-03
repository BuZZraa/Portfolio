import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Prashant</h1>
        <p className={styles.description}>
          An aspiring full-stack developer specializing in React and Node.js,
          passionate about building scalable web applications. Seeking
          internship opportunities to expand expertise and gain industry
          experience.
        </p>
        <a href="mailto:royaleplay645@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}
