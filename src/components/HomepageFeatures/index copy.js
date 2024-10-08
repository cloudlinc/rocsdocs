import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Accessible Support',
    Svg: require('@site/static/img/astronaut.svg').default,
    description: (
      <>
        ROCS Support is designed to be easily accessible for students, parents, and staff.
      </>
    ),
  },
  {
    title: 'Dedicated Assistance',
    Svg: require('@site/static/img/icon2.svg').default,
    description: (
      <>
        ROCS Support prioritizes the educational experience of every student.
      </>
    ),
  },
  {
    title: 'Student-Centered Approach',
    Svg: require('@site/static/img/icon3.svg').default,
    description: (
      <>
        We focus on creating a supportive environment tailored to each student's unique needs.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
