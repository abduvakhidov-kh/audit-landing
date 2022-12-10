import { ReactNode } from 'react';

import { Button, Card } from 'flowbite-react';
import { useTranslation } from 'next-export-i18n';

import { CourseModal } from '../feature/Modal';
import { Section } from '../layout/Section';
import { CourseDifficulty } from '../types';

const coursesList: {
  id: number;
  title: string;
  img: string;
  modalData: {
    difficulty: CourseDifficulty;
    period: string;
    description: string;
    price: string;
    instructors: ReactNode;
  };
}[] = [
  {
    id: 0,
    title: 'Бухгалтерия с нуля до баланса',
    img: './assets/images/accounting.jpg',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: '10 days',
      price: '10$',
      description: 'test description',
      instructors: <>test</>,
    },
  },
  {
    id: 1,
    title: '1С 8.3',
    img: './assets/images/picture14.png',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: '10 days',
      price: '10$',
      description: 'test description',
      instructors: <>test</>,
    },
  },
  {
    id: 2,
    title: 'Финансовое моделирование.',
    img: './assets/images/picture13.jpg',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: '10 days',
      price: '10$',
      description: 'test description',
      instructors: <>test</>,
    },
  },
  {
    id: 3,
    title: 'ACCA DipIFR',
    img: './assets/images/picture12.jpg',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: '10 days',
      price: '10$',
      description: 'test description',
      instructors: <>test</>,
    },
  },
  {
    id: 4,
    title:
      '"Сертифицированный главный бухгалтер по МСФО" от британской ассоциации IAPBE',
    img: './assets/images/picture11.jpg',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: '10 days',
      price: '10$',
      description: 'test description',
      instructors: <>test</>,
    },
  },
  {
    id: 5,
    img: './assets/images/picture1.jpg',
    title: 'Международные Стандарты Финансовой Отчетности',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: '10 days',
      price: '10$',
      description: 'test description',
      instructors: <>test</>,
    },
  },
  {
    id: 6,
    img: './assets/images/picture2.jpg',
    title: 'Общеустановленная система налогообложения Узбекистана',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: '10 days',
      price: '10$',
      description: 'test description',
      instructors: <>test</>,
    },
  },
  {
    id: 7,
    img: './assets/images/picture3.jpg',
    title: 'ТМЗ: БУХГАЛТЕРСКИЙ УЧЕТ',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: '10 days',
      price: '10$',
      description: 'test description',
      instructors: <>test</>,
    },
  },
  {
    id: 8,
    img: './assets/images/picture4.png',
    title: 'Сертифицированный финансовый директор (IAPBE)',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: '10 days',
      price: '10$',
      description: 'test description',
      instructors: <>test</>,
    },
  },
  {
    id: 9,
    img: './assets/images/picture5.jpg',
    title: 'Профессиональный налоговый советник (IAPBE)',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: '10 days',
      price: '10$',
      description: 'test description',
      instructors: <>test</>,
    },
  },
  {
    id: 10,
    img: './assets/images/picture6.jpg',
    title: 'Профессиональный финансовый советник (IAPBE)',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: '10 days',
      price: '10$',
      description: 'test description',
      instructors: <>test</>,
    },
  },
  {
    id: 11,
    img: './assets/images/picture7.jpg',
    title: 'Бухгалтерский учет – ВЭД',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: '10 days',
      price: '10$',
      description: 'test description',
      instructors: <>test</>,
    },
  },
  {
    id: 12,
    img: './assets/images/picture8.jpg',
    title: 'Изменения в трудовом кодексе',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: '10 days',
      price: '10$',
      description: 'test description',
      instructors: <>test</>,
    },
  },
  {
    id: 13,
    img: './assets/images/picture9.jpg',
    title: 'Международные Стандарты Аудита',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: '10 days',
      price: '10$',
      description: 'test description',
      instructors: <>test</>,
    },
  },
  {
    id: 14,
    img: './assets/images/picture10.jpg',
    title: 'Национальная и международная системы налогообложения',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: '10 days',
      price: '10$',
      description: 'test description',
      instructors: <>test</>,
    },
  },
];

const Courses = () => {
  const { t } = useTranslation();

  return (
    <>
      <Section
        yPadding="py-0"
        title={<span className="text-primary-800">{t('courses')}</span>}
        id="courses"
      >
        <div className="grid w-full gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {coursesList.map(({ title, modalData, id, img }) => (
            <div className="max-w-sm " key={id}>
              <Card
                className="h-full"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={img}
              >
                <h5 className="mx-0 my-0 mt-auto text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
                <CourseModal
                  button={
                    <Button>
                      {t('read_more')}
                      <svg
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                  }
                  courseData={modalData}
                />
              </Card>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export { Courses };
