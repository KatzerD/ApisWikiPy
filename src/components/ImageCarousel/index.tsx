import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const images = [
  {
    src: 'img/mef.png',
    alt: 'Ministerio de Economía y Finanzas',
  },
  {
    src: 'img/congreso.png',
    alt: 'Congreso Nacional',
  },
  {
    src: 'img/dncp.png',
    alt: 'Dirección Nacional de Contrataciones Públicas',
  },
];

export default function ImageCarousel(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {images.map((image, index) => (
          <div
            key={index}
            className={clsx(styles.slide, {
              [styles.active]: index === currentIndex,
            })}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            key={index}
            className={clsx(styles.dot, {
              [styles.activeDot]: index === currentIndex,
            })}
            onClick={() => handleDotClick(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

