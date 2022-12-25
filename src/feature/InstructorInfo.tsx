import { FC } from 'react';

import { useTranslation } from 'next-export-i18n';

import { Section } from '../layout/Section';

interface InstructorInfoProps {
  instructor: {
    name: string;
    img?: string;
    about: string;
    experience: string;
  };
}

const InstructorInfo: FC<InstructorInfoProps> = ({ instructor }) => {
  const { t } = useTranslation();
  const { name, img, about, experience } = instructor;
  return (
    <Section yPadding="py-0">
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-3 xyz-nested">
          <img
            className="h-32 mx-auto rounded-lg w-28"
            src={
              img === undefined ? './assets/images/default-avatar.webp' : img
            }
            alt="avatar of instructor"
          />
        </div>
        <h5 className="mt-1 text-lg font-bold text-center text-gray-900 xyz-nested">
          {t(name)}
        </h5>
        <div className="pt-6 space-y-4 xyz-nested">
          <blockquote className="sm:w-full">
            <p className="w-full px-0 text-lg font-medium text-center text-gray-800 sm:px-4">
              {t(about)}
            </p>
          </blockquote>
          <figcaption className="mx-auto font-bold text-center text-gray-900">
            {t(experience)}
          </figcaption>
        </div>
      </div>
    </Section>
  );
};

export { InstructorInfo };
