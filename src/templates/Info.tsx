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
  { id: 0, description: 'students', image: '/assets/images/feature1.jpg' },
  {
    id: 1,
    description: 'work_period',
    image: '/assets/images/feature2.png',
  },
  {
    id: 2,
    description: 'about_courses',
    image: '/assets/images/feature3.jpg',
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
        id="about_us"
        yPadding="py-6"
        title={<span className="text-primary-600">{t('about_us')}</span>}
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
        <div
          className="relative flex flex-col-reverse items-end mt-4"
          style={{ height: '600px' }}
        >
          <img
            src="./assets/images/graduated.jpg"
            style={{ height: '600px', width: '100%' }}
            className="absolute -z-10"
            alt="section about graduated students"
          />
          <div className="absolute pl-3 my-4 text-lg font-semibold leading-relaxed text-center text-gray-100">
            {t('about_students')}
          </div>
        </div>
      </Section>
    </div>
  );
};

export { Info };
