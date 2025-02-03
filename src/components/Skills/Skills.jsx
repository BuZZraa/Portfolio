import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import certification from "../../data/certifications.json"
import { getImageUrl } from "../../utils";

export default function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.title}>Skills & Certifications</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.certification}>
          {certification.map((certificationItem, id) => {
            return (
              <li key={id} className={styles.certificationItem}>
                <img
                  src={getImageUrl(certificationItem.imageSrc)}
                  alt={`${certificationItem.organisation} Logo`}
                />
                <div className={styles.certificationItemDetails}>
                  <h3>{`${certificationItem.title}, ${certificationItem.teacher}`}</h3>
                  <p>{certificationItem.completionDate}</p>
                  <ul>
                    {certificationItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
