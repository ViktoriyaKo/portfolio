'use client';
import clsx from 'clsx';
import styles from './Gallery.module.css';

import Image from 'next/image';
import { GALLERY } from '@/entities';
import { motion } from 'framer-motion';
import { fadeAnimation } from '@/utils';

const Gallery = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.wrapper}>
        {GALLERY.map((item, index) => {
          const { name, description, image, style, height } = item;

          return (
            <motion.li
              key={name}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              variants={fadeAnimation}
              className={styles.inner}
            >
              <div
                className={clsx(
                  styles.card,
                  styles.description,
                  style ? styles[style] : ''
                )}
                style={{ order: index % 2 === 0 ? -1 : 1 }}
              >
                <h2 className={styles.title}>{name}</h2>
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </div>
              <div className={styles.card}>
                <Image
                  alt={name}
                  src={image}
                  style={{ maxHeight: height }}
                  className={styles.image}
                  sizes="40vw"
                  quality={70}
                />
                <div className={styles.filter} />
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default Gallery;
