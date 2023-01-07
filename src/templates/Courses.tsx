import { useMemo, useState } from 'react';

import { XyzTransition } from '@animxyz/react';
import { Button } from 'flowbite-react';
import { useTranslation } from 'next-export-i18n';

import { CourseCard } from '../feature/CourseCard';
import { CourseModal } from '../feature/Modal';
import { Section } from '../layout/Section';
import { CourseDifficulty, ModalDataType } from '../types';
import { ContactUs } from './ContactUs';

const coursesList: {
  id: number;
  title: string;
  img: string;
  modalData: ModalDataType;
}[] = [
  {
    id: 0,
    title: 'course_1',
    img: './assets/images/picture6.jpg',
    modalData: {
      difficulty: CourseDifficulty.BEGINER,
      period: 'course_1_dur',
      description: 'course_1_desc',
      destination: 'course_1_for',
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
      description: 'empty_info',
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
    return coursesList.slice(0, 4);
  }, [isExpanded]);

  return (
    <div>
      <Section
        yPadding="py-10 md:py-5 lg:py-10 lg:pb-0"
        title={<span className="pb-5 text-primary-600"></span>}
        id="courses"
      >
        <div
          className={`flex min-w-full gap-1 lg:gap-4 ${
            isExpanded
              ? 'lg:flex-col flex-col-reverse'
              : 'lg:flex-row flex-col-reverse'
          } lg:justify-between`}
        >
          <XyzTransition
            appearVisible
            duration="auto"
            xyz="fade stagger duration-10 ease-out-back"
          >
            <div className="w-full py-2">
              <div className="flex items-center justify-between w-full py-2">
                <h2 className="text-3xl font-bold text-primary-600">
                  {t('courses')}
                </h2>
                <Button className="px-3 py-1" onClick={handleClick}>
                  {isExpanded ? t('less') : t('more')}
                </Button>
              </div>
              <div
                className={`grid gap-5 ${
                  isExpanded ? 'lg:grid-cols-4' : 'lg:grid-cols-2'
                } md:grid-cols-2 sm:grid-cols-1`}
              >
                {coursesData.map(({ title, modalData, id, img }) => (
                  <div key={id} className="max-w-full xyz-nested">
                    <CourseCard
                      title={t(title)}
                      modal={
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
                      }
                      img={img}
                    />
                  </div>
                ))}
              </div>
            </div>
          </XyzTransition>
          <div
            className={`${
              isExpanded ? 'lg:translate-y-0' : 'lg:-translate-y-32'
            }`}
          >
            <ContactUs />
          </div>
        </div>
      </Section>
    </div>
  );
};

export { Courses };
