import { Fragment } from 'react';

import { Carousel } from 'flowbite-react';
import { useTranslation } from 'next-export-i18n';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

import { Background } from '../background/Background';
import { InstructorInfo } from '../feature/InstructorInfo';
import { Section } from '../layout/Section';

const instructorsLists = [
  {
    name: 'instr_1_name',
    about: 'instr_1_about',
    experience: 'instr_1_exp',
  },
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
    img: './assets/images/avat.png',
    about: 'instr_4_about',
    experience: 'instr_4_exp',
  },
];

const Instructors = () => {
  const { t } = useTranslation();

  return (
    <Background img="/assets/images/instructors-bg.jpg">
      <Section
        id="staff"
        yPadding="py-5 pb-10"
        title={
          <h2 className="mb-6 text-2xl font-medium text-primary-500 sm:text-3xl title-font">
            {t('explor_instructors')}
          </h2>
        }
      >
        <Carousel
          indicators={false}
          leftControl={
            <AiFillCaretLeft
              color="black"
              size={20}
              className="-translate-x-4"
            />
          }
          rightControl={
            <AiFillCaretRight
              color="black"
              size={20}
              className="translate-x-4"
            />
          }
        >
          {instructorsLists.map((instructor, index) => (
            <Fragment key={index}>
              <InstructorInfo instructor={instructor} />
            </Fragment>
          ))}
        </Carousel>
      </Section>
    </Background>
  );
};

export { Instructors };
