import { ReactNode, useMemo, useState } from 'react';

import { XyzTransition } from '@animxyz/react';
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
    period?: string;
    description?: string;
    destination?: string;
    price?: string;
    instructors?: ReactNode;
  };
}[] = [
  {
    id: 0,
    title: 'course_1',
    img: './assets/images/picture6.jpg',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: 'course_1_dur',
      description: 'xourse_1_desc',
      destination: 'empty_info',
      instructors: <>test</>,
    },
  },
  {
    id: 1,
    title: '1С 8.3',
    img: './assets/images/picture10.jpg',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: 'course_1_dur',
      description: 'course_1_desc',
      instructors: <>test</>,
    },
  },
  {
    id: 2,
    title: 'course_2',
    img: './assets/images/picture13.jpg',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: 'course_2_dur',
      destination: 'course_2_for',
      description: 'course_2_desc',
      instructors: <>test</>,
    },
  },
  {
    id: 3,
    title: 'ACCA DipIFR',
    img: './assets/images/picture12.jpg',
    modalData: {
      difficulty: CourseDifficulty.INTERMEDIATE,
      period: 'empty_info',
      destination: 'course_14_for',
      description: 'course_14_desc',
      instructors: <>test</>,
    },
  },
  {
    id: 4,
    title: 'course_3',
    img: './assets/images/picture11.jpg',
    modalData: {
      difficulty: CourseDifficulty.INTERMEDIATE,
      period: 'empty_info',
      destination: 'course_3_for',
      description: 'course_3_desc',
      instructors: <>test</>,
    },
  },
  {
    id: 5,
    img: './assets/images/picture1.jpg',
    title: 'course_4',
    modalData: {
      difficulty: CourseDifficulty.INTERMEDIATE,
      period: 'empty_info',
      destination: 'course_4_for',
      description: 'course_4_desc',
      instructors: <>test</>,
    },
  },
  {
    id: 6,
    img: './assets/images/picture2.jpg',
    title: 'course_5',
    modalData: {
      difficulty: CourseDifficulty.INTERMEDIATE,
      period: 'course_5_dur',
      destination: 'course_5_for',
      description: 'test description',
      instructors: <>test</>,
    },
  },
  {
    id: 7,
    img: './assets/images/picture3.jpg',
    title: 'course_6',
    modalData: {
      difficulty: CourseDifficulty.ADVANCED,
      period: 'empty_info',
      destination: 'course_6_for',

      description: '',
      instructors: <>test</>,
    },
  },
  {
    id: 8,
    img: './assets/images/picture8.jpg',
    title: 'course_7',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: 'course_7_dur',
      description: 'course_7_desc',
      destination: 'course_7_for',
      instructors: <>test</>,
    },
  },
  {
    id: 9,
    img: './assets/images/picture5.jpg',
    title: 'course_8',
    modalData: {
      difficulty: CourseDifficulty.INTERMEDIATE,
      period: 'empty_info',
      destination: 'course_8_for',
      description: 'course_8_desc',
      instructors: <>test</>,
    },
  },
  {
    id: 10,
    img: './assets/images/picture6.jpg',
    title: 'course_9',
    modalData: {
      difficulty: CourseDifficulty.INTERMEDIATE,
      period: 'empty_info',
      description: 'course_9_desc',
      destination: 'course_9_for',
      instructors: <>test</>,
    },
  },
  {
    id: 11,
    img: './assets/images/picture7.jpg',
    title: 'course_10',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: 'empty_info',
      description: 'course_10_desc',
      destination: 'course_10_for',
      instructors: <>test</>,
    },
  },
  {
    id: 12,
    img: './assets/images/picture8.jpg',
    title: 'course_11',
    modalData: {
      difficulty: CourseDifficulty.INTERMEDIATE,
      period: 'course_11_dur',
      description: 'course_11_desc',
      destination: 'course_11_for',
      instructors: <>test</>,
    },
  },
  {
    id: 13,
    img: './assets/images/picture9.jpg',
    title: 'course_12',
    modalData: {
      difficulty: CourseDifficulty.INTERMEDIATE,
      period: 'empty_info',
      description: 'course_12_desc',
      destination: 'course_12_for',
      instructors: <>test</>,
    },
  },
  {
    id: 14,
    img: './assets/images/picture10.jpg',
    title: 'course_13',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: 'empty_info',
      description: 'course_13_desc',
      destination: 'course_13_for',
      instructors: <>test</>,
    },
  },
];

const Courses = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const coursesData = useMemo(() => {
    if (isExpanded) {
      return coursesList;
    }
    return coursesList.slice(0, 8);
  }, [isExpanded]);

  return (
    <div className="relaxing-red">
      <Section
        yPadding="py-10"
        title={<span className="pb-5 text-primary-600">{t('courses')}</span>}
        id="courses"
      >
        <XyzTransition
          appearVisible
          duration="auto"
          xyz="fade stagger duration-10 delay-2 ease-out-back"
        >
          <div className="w-full py-5">
            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              {coursesData.map(({ title, modalData, id, img }) => (
                <div
                  className="max-w-sm mx-auto xyz-nested drop-shadow-xl"
                  key={id}
                >
                  <Card className="h-full" imgAlt={t(title)} imgSrc={img}>
                    <h5 className="mx-0 my-auto text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {t(title)}
                    </h5>
                    <CourseModal
                      button={
                        <Button className="bg-primary-500">
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
            <Button className="px-3 py-1 mx-auto mt-5" onClick={handleClick}>
              {isExpanded ? t('less') : t('more')}
            </Button>
          </div>
        </XyzTransition>
      </Section>
      <style jsx>
        {`
          .relaxing-red {
            background-image: linear-gradient(
              to right,
              #c6ffdd,
              #fbd786,
              #f7797d
            );
          }
        `}
      </style>
    </div>
  );
};

export { Courses };
