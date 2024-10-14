import { Title } from '@/ui/atoms';
import styles from './Experience.module.css';
import { motion } from 'framer-motion';
import { fadeAnimation } from '@/utils';
import { EDUCATION, EXPERIENCE } from '@/entities';

const Experience = () => {
  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <Title title={'Education && Experience'} />
      {/* card */}
      <ul className={styles.wrapper}>
        <motion.li custom={0} variants={fadeAnimation} className={styles.card}>
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
        </motion.li>
        <motion.li custom={1} variants={fadeAnimation} className={styles.card}>
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
        </motion.li>
      </ul>
    </motion.section>
  );
};

export default Experience;
