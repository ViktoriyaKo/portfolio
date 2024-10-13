import clsx from 'clsx';
import styles from './Gallery.module.css';
import sport from '/public/images/sport.jpg';
import skills from '/public/images/skills.png';
import travel from '/public/images/travel.jpg';

import Image from 'next/image';

const Gallery = () => {
  const skillsBody = `<div>
    <p><span>Programming languages</span>   JavaScript, TypeScript</p>
    <p><span>Frameworks</span>React, Next.js, React Native, Node.js, Strapi, Directus, Express</p>
    <p><span>Markup</span>HTML, CSS, SCSS/SASS, Pixel Perfect, BEM</p>
    <p><span>State Management Libraries</span>MobX, Redux Toolkit, Redux</p>
    <p><span>Libraries</span>Deck.gl, React Flow, Framer motion, Keen-slider, Apollo Client</p>
    <p><span>UI Libraries</span>Tailwind, Material UI, Bootstrap</p>
    <p><span>Tools</span>Figma, Postman, Webpack, Git, Github, GitHub Actions, GitLab, Jira, Miro,</p>
    Trello, Redmine, Swagger, Cloudinary</p>
    <p><span>Hosting</span>Vercel, Render.com, Netlify, Railway,</p>
    <p><span>Databases</span>PostgreSQL, SQLite, MongoDB, MySQL</p>
    <p><span>Network</span>GraphQL, REST API</p>
    <p><span>Internalization</span>Strapi i18n, Next.js i18n, React i18n</p>
    <p><span>Testing</span>JEST
</div>`;

  const travelBody = `<div>
<p>Traveling is more than a hobby; it's a way of life that fills me with excitement and curiosity. I love discovering new places, from vibrant cities to quiet mountain villages.</p> 
<p>Each journey brings a chance to learn about different cultures, try new foods, and meet interesting people. Stepping into a new environment always inspires me, and every trip adds a new chapter to my life's story. It’s an endless source of joy and inspiration.</p>
</div>`;

  const danceBody = `<div>
<p>I have been practicing pole dance for several years and absolutely love sports.</p> 
<p>Staying active has always been a big part of my life. I also hold the title of Candidate for Master of Sports (CMS) in all-around athletics, which reflects my dedication and passion for fitness.</p>
</div>`;

  const gallery = [
    { name: '#1 Skills', description: skillsBody, image: skills },
    {
      name: '#2 Hobby: Travel',
      description: travelBody,
      image: travel,
      style: 'text',
    },
    {
      name: '#3 Hobby: Pole dance',
      description: danceBody,
      image: sport,
      style: 'text',
    },
  ];

  return (
    <section className={styles.container}>
      <ul className={styles.wrapper}>
        {gallery.map((item, index) => {
          const { name, description, image, style } = item;

          return (
            <li key={name} className={styles.inner}>
              <div
                className={clsx(
                  styles.card,
                  styles.description,
                  style ? styles[style] : ''
                )}
                style={{ order: index % 2 === 0 ? -1 : 1 }}
              >
                <h3 className={styles.title}>{name}</h3>
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </div>
              <div className={styles.card}>
                <Image alt={name} src={image} className={styles.image} />
                <div className={styles.filter} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Gallery;
