import { Fragment } from 'react';

import { XyzTransition } from '@animxyz/react';
import className from 'classnames';
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
    'mx-2',
    'my-10',
    'flex',
    'flex-wrap',
    'items-center'
  );

  return (
    <div className={verticalFeatureClass}>
      <Section
        id="about_us"
        yPadding="py-0"
        title={<span className="text-primary-600">{t('about_us')}</span>}
      >
        <div>
          <XyzTransition
            appearVisible
            duration="auto"
            xyz="fade flip-down stagger duration-10 delay-2"
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
          </XyzTransition>
        </div>
        <XyzTransition
          appearVisible
          duration="auto"
          xyz="fade flip-down stagger duration-10 delay-2"
        >
          <div className="flex flex-col h-screen mt-4 xyz-nested">
            <img
              src="./assets/images/graduated.jpg"
              style={{
                height: '80%',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
              className="sm:h-96"
              alt="section about graduated students"
            />
            <div className="mt-6 text-lg font-semibold leading-relaxed text-center text-gray-700">
              {t('about_students')}
            </div>
          </div>
        </XyzTransition>
      </Section>
    </div>
  );
};

export { Info };
