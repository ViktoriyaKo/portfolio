import Image from 'next/image';
import styles from './Hero.module.css';
import photo from '/public/images/photo.jpg';
import { Technologies } from '@/ui/molecules';
import Link from 'next/link';
import { Icon, GithubIcon } from '@/ui/atoms/Icons';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={photo}
          alt={'photo'}
          className={styles.image}
          width={100}
          height={100}
        />
        <p className={styles.caption}>Vika</p>
      </div>
      <header>
        <h1 className={styles.title}>Hi, I&apos;m Viktoriia Avsievich!</h1>
        <div className={styles.wrapperDescription}>
          <h2 className={styles.description}>
            Frontend Developer with 3+ years of commercial experience
          </h2>
          <Link
            className={styles.github}
            href={'https://github.com/ViktoriyaKo'}
          >
            <>
              <span>Visit my</span>
              <Icon html={GithubIcon} />
            </>
          </Link>
        </div>
      </header>
      <Technologies />
    </section>
  );
};

export default Hero;
