import { XyzTransition } from '@animxyz/react';
import { useTranslation } from 'next-export-i18n';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const features: {
  id: number;
  description: string;
  image: string;
}[] = [
  { id: 0, description: 'students', image: '/assets/images/feature1.png' },
  {
    id: 1,
    description: 'work_period',
    image: '/assets/images/feature2.png',
  },
  {
    id: 2,
    description: 'about_courses',
    image: '/assets/images/feature3.png',
  },
];

const gallery: string[] = [
  './assets/images/gallery1.jpg',
  './assets/images/gallery2.jpg',
  './assets/images/gallery3.jpg',
];

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className="items-center w-full bg-gray-100 ">
      <Section id="about_us" yPadding="py-10 pb-5">
        <h2 className="mb-2 text-4xl font-bold text-primary-600">
          {t('about_us')}
        </h2>
        <div className="grid grid-cols-1 lg:gap-6 lg:grid-cols-3">
          <XyzTransition
            appearVisible
            duration="auto"
            xyz="fade flip-down stagger duration-10"
          >
            <div className="grid w-full grid-cols-1 col-span-2 gap-1 md:grid-cols-2 h-fit">
              {gallery.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  className={`object-cover ${
                    index === 0 ? 'md:col-span-2 md:img-big' : 'md:img-small'
                  } rounded-md`}
                  alt="image from lessons xyz-nested"
                />
              ))}
            </div>
          </XyzTransition>
          <XyzTransition
            appearVisible
            duration="auto"
            xyz="fade flip-down stagger duration-10"
          >
            <div className="w-full mt-2 xyz-nested">
              <div className="flex items-center justify-center p-6 mx-auto text-center bg-white rounded-md shadow-md h-fit xyz-nested">
                <blockquote>
                  <p className="w-full text-lg font-medium xyz-nested">
                    {t('about_students')}
                  </p>
                </blockquote>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="mt-2 text-4xl font-bold text-primary-600 place-self-start xyz-nested">
                  {t('why_we')}
                </h2>
                <div className="grid w-full grid-cols-1 grid-rows-3 gap-2 h-fit">
                  {features.map(({ id, description, image }) => (
                    <div key={id} className="xyz-nested">
                      <VerticalFeatureRow
                        reverse
                        description={t(`${description}`)}
                        imageAlt={t(`${description}`)}
                        image={image}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </XyzTransition>
        </div>
      </Section>
      <style jsx>
        {`
          .img-big {
            height: 430px;
            width: 100%;
          }
          .img-small {
            width: 100%;
            height: 375px;
          }
        `}
      </style>
    </div>
  );
};

export { Info };
