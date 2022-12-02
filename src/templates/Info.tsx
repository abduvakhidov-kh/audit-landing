import { Fragment } from 'react';

import className from 'classnames';
// import { useTranslation } from 'react-i18next';
import { useTranslation } from 'next-export-i18n';

import { VerticalCard } from '../feature/VerticalCard';
import { Section } from '../layout/Section';

const features: {
  id: number;
  description: string;
  image: string;
}[] = [
  { id: 0, description: 'period', image: '/assets/images/feature1.png' },
  {
    id: 1,
    description: 'detailed_statistic',
    image: '/assets/images/feature2.png',
  },
  {
    id: 2,
    description: 'individual_approach',
    image: '/assets/images/feature3.png',
  },
  {
    id: 3,
    description: 'percent_passed',
    image: '/assets/images/feature4.png',
  },
  {
    id: 4,
    description: 'student_amount',
    image: '/assets/images/feature5.png',
  },
  {
    id: 5,
    description: 'instructors',
    image: '/assets/images/feature6.png',
  },
];

const Info = () => {
  const { t } = useTranslation();

  const verticalFeatureClass = className(
    'mt-12',
    'flex',
    'flex-wrap',
    'items-center'
  );

  return (
    <div className={verticalFeatureClass}>
      <Section
        id="why-we"
        yPadding="py-6"
        title={<span className="text-primary-800">{t('why_we')}</span>}
      >
        <div className="grid w-full lg:grid-cols-3 place-items-center md:grid-cols-2 sm:grid-cols-2">
          {features.map(({ id, description, image }) => (
            <Fragment key={id}>
              <VerticalCard
                description={t(`${description}`)}
                imageAlt={t(`${description}`)}
                image={image}
              />
            </Fragment>
          ))}
        </div>
      </Section>
    </div>
  );
};

export { Info };
