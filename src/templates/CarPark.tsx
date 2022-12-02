import { Carousel } from 'flowbite-react';
import { useTranslation } from 'next-export-i18n';
// import { useTranslation } from 'react-i18next';

import { Section } from '../layout/Section';

const CarPark = () => {
  const { t } = useTranslation();

  return (
    <>
      <Section
        yPadding="py-0"
        title={<span className="text-primary-800">{t('carpark')}</span>}
        id="carpark"
      >
        <div className="p-2 h-96 carousel-container">
          <Carousel indicators={false}>
            <img
              src="/assets/images/malibu1.png"
              alt="malibu"
              height="500"
              className="car-images"
            />
            <img
              src="/assets/images/spark.png"
              alt="spark"
              height="500"
              className="car-images"
            />
            <img
              src="/assets/images/nexia3.png"
              alt="nexia3"
              height="500"
              className="car-images"
            />
            <img
              src="/assets/images/cobalt.png"
              alt="cobalt"
              height="500"
              className="car-images"
            />
            <img
              src="/assets/images/zil.png"
              alt="zil"
              height="500"
              className="car-images"
            />
            <img
              src="/assets/images/gentra.png"
              alt="gentra"
              height="500"
              className="car-images"
            />
          </Carousel>
        </div>
      </Section>
      <style jsx>
        {`
          .carousel-container {
            border-radius: 5px;
            background-color: #673ab7;
            min-width: 100%;
            min-height: 600px;
            object-fit: cover;
          }
        `}
      </style>
    </>
  );
};

export { CarPark };
