import { Card } from '@/ui/molecules';
import styles from './Works.module.css';
import { WORKS } from '@/entities';
import { Title } from '@/ui/atoms';

const Works = () => {
  return (
    <section className={styles.container} id="work">
      <Title title={'My best works'} />
      <div className={styles.wrapper}>
        {WORKS.map((item) => {
          return <Card key={item.name} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Works;
