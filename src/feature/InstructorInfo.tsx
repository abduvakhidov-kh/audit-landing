import { FC } from 'react';

import { useTranslation } from 'next-export-i18n';

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
    <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
      <img
        className="w-20 h-20 mx-auto rounded-md md:mx-0"
        src={img === undefined ? './assets/images/default-avatar.webp' : img}
        alt={t(name)}
        height="220"
        width="220"
        loading="lazy"
      />
      <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
        <p className="text-gray-600">{t(about)}</p>
        <div>
          <h6 className="text-lg font-semibold leading-none">{t(name)}</h6>
          <span className="text-xs text-gray-500">{t(experience)}</span>
        </div>
      </div>
    </div>
  );
};

export { InstructorInfo };
