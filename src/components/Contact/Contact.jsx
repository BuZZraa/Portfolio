import styles from "./Contact.module.css"
import {getImageUrl} from "../../utils.js"

export default function Contact() {
    return(
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt= "Email icon"/>
                    <a href="mailto:royaleplay645@gmail.com" target="_blank">royaleplay645@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt= "LinkedIn icon"/>
                    <a href="https://www.linkedin.com/in/prashant-bajracharya-432a19282" target="_blank">linkedin.com/PrashantBajracharya</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt= "Github icon"/>
                    <a href="https://github.com/BuZZraa/BuZZraa" target="_blank">github.com/BuZZraa</a>
                </li>
            </ul>
        </footer>
    )
}