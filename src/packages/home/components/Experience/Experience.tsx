import { Title } from '@/ui/atoms';
import styles from './Experience.module.css';

const Experience = () => {
  const education = [
    {
      name: `Electrotechnical University "LETI", Department of Electrical Engineering`,
      speciality: 'Electronics and Nanoelectronics',
      degree: `Master's degree`,
      date: '2015-2017',
      mark: '4,6 out of 5',
    },
    {
      name: `Ural Federal University (UrFU) Institute of Physics and Technology`,
      speciality: 'Electronics and Nanoelectronics',
      degree: `Bachelor's degreee`,
      date: '2011-2015',
      mark: '4,7 out of 5',
    },
    {
      name: `Ural Federal University (UrFU) Business School`,
      speciality: 'Economy and Management',
      degree: `Bachelor's degree`,
      date: '2012-2015',
      mark: '4,86 out of 5',
    },
  ];

  const experience = [
    {
      name: `Batumi Estate`,
      speciality: 'Frontend Developer',
      technologies: `Next.js, React, TypeScript, Redux ToolKit, Node.js, Directus, GraphQL, HTML, CSS, Tailwind, Postgresql, Keen-slider, Figma`,
      date: 'Dec 2023-Sep 2024',
    },
    {
      name: `Baltic-Soft`,
      speciality: 'Frontend Developer',
      technologies: `React, TypeScript, MobX, Material UI, React Flow, Deck.GL, Rest Api, HTML, CSS`,
      date: 'Dec 2022-Dec 2023',
    },
    {
      name: `EPAM Systems`,
      speciality: 'Frontend Developer',
      technologies: `React, TypeScript, JavaScript, Redux, HTML, CSS, SASS, Jest, Bootstrap, Node.js`,
      date: 'Dec 2020 — Nov 2022',
    },
  ];

  return (
    <section className={styles.container}>
      <Title title={'Education && Experience'} />
      {/* card */}
      <ul className={styles.wrapper}>
        <li className={styles.card}>
          <div>
            <p className={styles.title}>Education</p>
            <ul className={styles.inner}>
              {education.map((item) => {
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
              {experience.map((item) => {
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
