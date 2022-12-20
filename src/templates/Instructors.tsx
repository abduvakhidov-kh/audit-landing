import { Fragment } from 'react';

import { Carousel } from 'flowbite-react';
import { useTranslation } from 'next-export-i18n';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

import { Background } from '../background/Background';
import { InstructorInfo } from '../feature/InstructorInfo';
import { Section } from '../layout/Section';

const instructorsLists = [
  {
    name: 'Маматов Алишер Данабаевич',
    about:
      'Организованность, коммуникабельность, отзывчивость, внимательность, хорошая дикция, умение работать с аудиторией, активность, всесторонняя развитость, любовь к преподаванию.',
    experience: '11 лет опыта работы',
  },
  {
    name: 'Normatov Rustam Chorshanbiyevich',
    img: './assets/images/avatar1.png',
    about:
      'Преподаватель по предметам АССА, финансовому учету (CAP/CIPA), основам МСФО, DipIFR(рус)',
    experience: '10 лет опыта работы',
  },
  {
    name: 'Mamurjonov Olimjon Mamurjon o’g’li',
    img: './assets/images/avatar2.jpg',
    about:
      'Annual balance of goods and materials Calculation of costs Calculation of wages. Material accounting Statistical reporting Cash transactions. Fixed assets Primary documentation Profit and loss statement. Calculation of taxes Tax reporting Financial statements Cash documents Accounting 1C: Enterprise 8',
    experience: '12 лет опыта работы',
  },
  {
    name: 'Ким Анжелика Анатольевна',
    img: './assets/images/avatar3.jpg',
    about:
      'С 2017 года профессиональный тренер в НАБУ по Финансовому учету 1, Управленческому учету 1, Финансовая отчетность по  МСФО.',
    experience:
      'Непрерывный  стаж 35 года бухгалтерии. Из них: 15 лет финансовый директор и аудитор.',
  },
];

const Instructors = () => {
  const { t } = useTranslation();

  return (
    <Background img="/assets/images/instructors-bg.jpg">
      <Section
        id="staff"
        title={
          <h2 className="text-2xl font-medium text-primary-500 sm:text-3xl title-font">
            {t('explor_instructors')}
          </h2>
        }
      >
        <Carousel
          leftControl={<AiFillCaretLeft color="black" size={20} />}
          rightControl={<AiFillCaretRight color="black" size={20} />}
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
