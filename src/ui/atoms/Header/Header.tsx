import { ROUTERS } from '@/constants';
import styles from './Header.module.css';
import Link from 'next/link';
import { Icon, LogoIcon } from '../Icons';
// import telegram from '/public/svg/telegram.svg';

const Header = () => {
  return (
    <header className={styles.container}>
      <Link aria-label="main page" href={`/`} className={styles.link}>
        <Icon html={LogoIcon} />
      </Link>

      <ul className={styles.list}>
        {ROUTERS.map((item) => {
          const { href, title } = item;
          return (
            <li key={title}>
              <Link href={href} className={styles.item}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* <Link href={`https://t.me/+79817805044`} className={styles.link}>
        <SvgContainer path={telegram} alt={'telegram'} />
      </Link> */}
    </header>
  );
};

export default Header;
