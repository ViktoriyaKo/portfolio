import { Icon, CloseIcon } from '@/ui/atoms/Icons';
import styles from './Card.module.css';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface IProps {
  href: string;
  name: string;
  image: StaticImageData;
}

const Card = (props: IProps) => {
  const { href, name, image } = props;

  return (
    <Link href={href} className={styles.container}>
      <div className={styles.topLine}>
        <div className={styles.points}>
          {[1, 2, 3].map((item) => {
            return <div key={item} className={styles.point} />;
          })}
        </div>
        <div className={styles.site}>{name}</div>
        <div className={styles.closeIcon}>
          <Icon html={CloseIcon} />
        </div>
      </div>
      <div className={styles.card}>
        <Image src={image} alt={name} className={styles.image} />
      </div>
    </Link>
  );
};

export default Card;
