'use client';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './Technologies.module.css';
import { useEffect, useState } from 'react';
import { TECHNOLOGIES } from '@/entities';

const Technologies = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const animation = { duration: 7000, easing: (t: number) => t };
  const [ref, slider] = useKeenSlider<HTMLElement>({
    loop: true,
    mode: 'free',
    slides: {
      perView: 'auto',
      spacing: 15,
    },
    created() {
      setIsLoaded(true);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  useEffect(() => {
    if (slider.current) {
      slider.current.moveToIdx(5, true, animation);
    }
  }, [animation, slider]);

  return (
    <ul
      className={clsx(styles.trapperTechnologies, 'keen-slider', {
        [styles.hidden]: !isLoaded,
      })}
      ref={ref}
    >
      <li className={styles.shadowLeft} />
      {TECHNOLOGIES.map((item) => {
        const { name, icon } = item ?? {};
        return (
          <li key={name} className={clsx(styles.icon, 'keen-slider__slide')}>
            <Image
              width={30}
              height={30}
              alt={`icon-${name}`}
              src={icon ?? ''}
            />
            <span className={styles.caption}>{name}</span>
          </li>
        );
      })}
      <li className={styles.shadowRight} />
    </ul>
  );
};

export default Technologies;
