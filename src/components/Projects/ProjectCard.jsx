import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils.js"

export default function ProjectCard({project : {title, imageSrc, description, skills, demo, source}}) {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (<li key={id} className={styles.skill}>{skill}</li>);
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target={demo !== "#projects" ? "_blank" : undefined}>Demo</a>
        <a href={source} className={styles.link} target="_blank">Source</a>
      </div>
    </div>
  );
}
