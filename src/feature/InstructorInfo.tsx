import { FC } from 'react';

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
  const { name, img, about, experience } = instructor;
  return (
    <Section>
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-3">
          <img
            className="w-24 h-24 mx-auto rounded-full"
            src={img === undefined ? './assets/images/avatar_default.jpg' : img}
            alt="avatar of instructor"
            style={{ objectFit: 'cover' }}
            width="384"
            height="512"
          />
        </div>
        <h5 className="mt-1 text-lg font-bold text-center text-primary-500">
          {name}
        </h5>
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="w-2/3 mx-auto text-lg font-medium text-center text-gray-800">
              {about}
            </p>
          </blockquote>
          <figcaption className="mx-auto font-bold text-center text-gray-900">
            {experience}
          </figcaption>
        </div>
      </div>
    </Section>
  );
};

export { InstructorInfo };
