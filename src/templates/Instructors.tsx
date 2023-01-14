import { Fragment } from 'react';

import { XyzTransition } from '@animxyz/react';
import { useTranslation } from 'next-export-i18n';

import { InstructorInfo } from '../feature/InstructorInfo';
import { Section } from '../layout/Section';

const instructorsLists = [
  {
    name: 'instr_2_name',
    img: './assets/images/avatar1.png',
    about: 'instr_2_about',
    experience: 'instr_2_exp',
  },

  {
    name: 'instr_3_name',
    img: './assets/images/avatar2.jpg',
    about: 'instr_3_about',
    experience: 'instr_3_exp',
  },
  {
    name: 'instr_4_name',
    img: './assets/images/avatar.png',
    about: 'instr_4_about',
    experience: 'instr_4_exp',
  },
  {
    name: 'instr_1_name',
    about: 'instr_1_about',
    experience: 'instr_1_exp',
  },
  {
    name: 'instr_5_name',
    img: './assets/images/avatar3.jpg',
    about: 'instr_5_about',
    experience: 'instr_5_exp',
  },
  {
    name: 'instr_6_name',
    img: './assets/images/avatar4.png',
    about: 'instr_6_about',
    experience: 'instr_6_exp',
  },
];

const Instructors = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-fixed bg-center bg-cover bg-intructors">
      <Section
        id="staff"
        yPadding="py-5 pb-10"
        title={
          <h2 className="mb-6 text-2xl font-medium text-primary-500 sm:text-3xl title-font">
            {t('explor_instructors')}
          </h2>
        }
      >
        <XyzTransition
          appearVisible
          duration="auto"
          xyz="fade stagger duration-10 ease-out-back"
        >
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {instructorsLists.map((instructor, index) => (
              <Fragment key={index}>
                <InstructorInfo instructor={instructor} />
              </Fragment>
            ))}
          </div>
        </XyzTransition>
      </Section>
    </div>
  );
};

export { Instructors };
