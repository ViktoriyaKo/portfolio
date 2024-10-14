import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>About me</h1>
      <div className={styles.description}>
        A hardworking and diligent front-end developer with 3+ years of
        commercial experience, passionate about web development. Holds a
        master`s degree in Nanoelectronics from Electrotechnical University
        &quot;LETI&quot;.
        <br />
        Experience with{' '}
        <span>
          Next.js, React, React Native, TypeScript, Node.js, Directus, Strapi,
          Redux, MobX, GraphQL and more
        </span>
        . Keen to leverage coding skills and analytical mindset to create
        engaging high-performance web-applications.
      </div>
    </section>
  );
};

export default Hero;
