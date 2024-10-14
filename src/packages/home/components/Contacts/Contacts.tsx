import Image from 'next/image';
import styles from './Contacts.module.css';
import photo from '/public/images/me3.png';
import { CONTACTS } from '@/entities';
import Link from 'next/link';
import { Icon } from '@/ui/atoms/Icons';
import clsx from 'clsx';

const Contacts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapperImage}>
        <svg
          className={styles.text}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="circlePath"
            d="
     M 20, 50
      a 30,30 0 1,1 60,0
      30,30 0 1,1 -60,0
    "
          />
          <text>
            <textPath href="#circlePath">Hire me!!!!!!!!!</textPath>
          </text>
        </svg>
        <Image
          src={photo}
          className={styles.image}
          alt={'avsievich'}
          width={500}
          height={700}
          quality={70}
        />
      </div>
      <ul className={styles.contacts}>
        {CONTACTS.map((item, index) => {
          const { name, icon, href } = item;
          console.log(href);
          return (
            <li
              key={name}
              className={clsx(styles.link, { [styles.align]: index === 1 })}
            >
              <Link target="_blank" href={href}>
                <Icon html={icon} />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Contacts;
