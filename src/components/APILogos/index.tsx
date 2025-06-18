import React from 'react';
import styles from './styles.module.css';

const logos = [
  {
    src: 'img/mef.png',
    alt: 'Ministerio de Economía y Finanzas',
    link: '/docs/hacienda'
  },
  {
    src: 'img/congreso.png',
    alt: 'Congreso Nacional',
    link: '/docs/congreso'
  },
  {
    src: 'img/dncp.png',
    alt: 'Dirección Nacional de Contrataciones Públicas',
    link: '/docs/contrataciones'
  },
];

export default function APILogos(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.logoGrid}>
        {logos.map((logo, index) => (
          <a key={index} href={logo.link} className={styles.logoItem}>
            <img src={logo.src} alt={logo.alt} className={styles.logo} />
            <div className={styles.logoTitle}>{logo.alt}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

