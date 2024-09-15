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
        <div className="button-container" style={{ padding: '15px 0' }}>
          <a href="/docs/intro" className="button button--secondary button--lg" style={{ padding: '12px 24px', fontSize: '16px' }}>
            Get Started
          </a>
        </div>
      </>
    ),
  },
  {
    title: 'Events and Calendar',
    Svg: require('@site/static/img/events.svg').default,
    description: (
      <>
        Stay updated with ROCS events and important dates. Never miss a school activity or deadline.
        <div className="button-container" style={{ padding: '15px 0' }}>
          <a href="https://www.rocs.org/events?view=cal-month" className="button button--secondary button--lg" style={{ padding: '12px 24px', fontSize: '16px' }}>
            View Events Calendar
          </a>
        </div>
      </>
    ),
  },
  {
    title: 'Contact Us',
    Svg: require('@site/static/img/icon2.svg').default,
    description: (
      <>
        Have questions or need assistance? We're here to help. Reach out to our dedicated support team.
        <div className="button-container" style={{ padding: '15px 0' }}>
          <a href="https://www.rocs.org/page/contact" className="button button--secondary button--lg" style={{ padding: '12px 24px', fontSize: '16px' }}>
            Contact Support
          </a>
        </div>
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
        {description}
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
