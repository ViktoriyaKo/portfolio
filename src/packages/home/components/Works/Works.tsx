import { Card } from '@/ui/molecules';
import styles from './Works.module.css';
import { WORKS } from '@/entities';
import { Title } from '@/ui/atoms';
import { motion } from 'framer-motion';
import { fadeAnimation } from '@/utils';

const Works = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      className={styles.container}
      id="work"
    >
      <Title title={'My best works'} />
      <ul className={styles.wrapper}>
        {WORKS.map((item, index) => {
          return (
            <motion.li
              custom={index + 1}
              variants={fadeAnimation}
              key={item.name}
            >
              <Card {...item} />
            </motion.li>
          );
        })}
      </ul>
    </motion.section>
  );
};

export default Works;
