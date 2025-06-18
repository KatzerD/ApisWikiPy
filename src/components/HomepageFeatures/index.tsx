import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Documentación Clara',
    icon: '📚',
    description: (
      <>
        Accede a documentación detallada y ejemplos prácticos para integrar
        las APIs gubernamentales en tus aplicaciones.
      </>
    ),
  },
  {
    title: 'Datos Actualizados',
    icon: '🔄',
    description: (
      <>
        Obtén acceso a información actualizada de las instituciones
        gubernamentales de Paraguay a través de APIs REST.
      </>
    ),
  },
  {
    title: 'Fácil Integración',
    icon: '🔌',
    description: (
      <>
        APIs diseñadas siguiendo estándares modernos, con endpoints
        consistentes y respuestas JSON bien estructuradas.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center', styles.featureIcon)}>
        <span role="img" aria-label={title} className={styles.featureEmoji}>
          {icon}
        </span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
