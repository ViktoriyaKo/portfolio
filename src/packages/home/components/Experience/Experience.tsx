import { Title } from '@/ui/atoms';
import styles from './Experience.module.css';
import { EDUCATION, EXPERIENCE } from '@/entities';

const Experience = () => {
  return (
    <section className={styles.container}>
      <Title title={'Education && Experience'} />
      {/* card */}
      <ul className={styles.wrapper}>
        <li className={styles.card}>
          <div>
            <p className={styles.title}>Education</p>
            <ul className={styles.inner}>
              {EDUCATION.map((item) => {
                const { name, speciality, degree, date, mark } = item;
                return (
                  <li key={name} className={styles.item}>
                    <p className={styles.muted}>{date}</p>
                    <p>{name}</p>
                    <p className={styles.degree}>{degree}</p>
                    <p className={styles.bold}>{speciality}</p>
                    <p className={styles.mark}>Average mark: {mark}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
        <li className={styles.card}>
          <div>
            <p className={styles.title}>Experience</p>
            <ul className={styles.inner}>
              {EXPERIENCE.map((item) => {
                const { name, speciality, technologies, date } = item;
                return (
                  <li key={name} className={styles.item}>
                    <p className={styles.muted}>{date}</p>
                    <p className={styles.bold}>{name}</p>
                    <p>{speciality}</p>
                    <p className={styles.technologies}>
                      Technologies: {technologies}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
