import { Card } from 'flowbite-react';
// import { useTranslation } from 'react-i18next';
import { useTranslation } from 'next-export-i18n';

import { Section } from '../layout/Section';

const ClassTimings = () => {
  const { t } = useTranslation();

  return (
    <Section
      id="groups"
      title={
        <span className="text-primary-800">{t('class_timings_title')}</span>
      }
    >
      <div className="grid w-full gap-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
        <Card>
          <div className="flex flex-col items-center gap-3">
            <img
              src="/assets/images/sunrise.png"
              alt="sunrise"
              width="90"
              height="90"
            />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 capitalize dark:text-white">
              {t('morning_times')}
            </h5>
            <p className="text-xl font-semibold tracking-tight text-primary-800 dark:text-white">
              9.00 - 12.00
            </p>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col items-center gap-3">
            <img
              src="/assets/images/sun.png"
              alt="sunrise"
              width="90"
              height="90"
            />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 capitalize dark:text-white">
              {t('day_times')}
            </h5>
            <p className="text-xl font-semibold tracking-tight text-primary-800 dark:text-white">
              15.00 - 18.00
            </p>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col items-center gap-3">
            <img
              src="/assets/images/sunset.png"
              alt="sunrise"
              width="90"
              height="90"
            />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 capitalize dark:text-white">
              {t('evening_times')}
            </h5>
            <p className="text-xl font-semibold tracking-tight text-primary-800 dark:text-white">
              18.00 - 21.00
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export { ClassTimings };
