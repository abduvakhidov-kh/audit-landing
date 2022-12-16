import { Fragment, ReactNode, useState, useMemo } from 'react';

import { Badge, Button, Modal } from 'flowbite-react';
import { useTranslation } from 'next-export-i18n';
import Link from 'next/link';

import { CourseDifficulty } from '../types';
import { Paragraph } from './Typography';

type IContactModalProps = {
  button?: ReactNode;
  courseData: {
    difficulty: CourseDifficulty;
    period?: string;
    description?: string;
    destination?: string;
    price?: string;
    instructors?: ReactNode;
  };
};

const CourseModal = (props: IContactModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { courseData, button } = props;

  const { t } = useTranslation();

  const onClick = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const courseDifficulty = useMemo(() => {
    switch (courseData.difficulty) {
      case CourseDifficulty.ADVANCED:
        return <Badge color="failure">{t('advanced')}</Badge>;
      case CourseDifficulty.INTERMEDIATE:
        return <Badge color="warning">{t('intermediate')}</Badge>;
      default:
        return <Badge color="success">{t('beginer')}</Badge>;
    }
  }, [courseData]);

  return (
    <Fragment>
      <span onClick={onClick} className="cursor-pointer w-fit">
        {button}
      </span>
      <Modal show={isOpen} onClose={onClose}>
        <Modal.Header>
          <span className="tracking-wide font-bolder">{t('details')}</span>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <h6 className="font-bold text-primary-500 ">
                Course difficulty:
              </h6>
              {courseDifficulty}
            </div>
            <Paragraph
              title={t('forWhom') as string}
              description={t(`${courseData.destination}`)}
            />
            <Paragraph
              title={t('description') as string}
              description={t(`${courseData.description}`)}
            />

            <Paragraph
              title={t('duration') as string}
              description={t(`${courseData.period}`)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose} className="mx-auto">
            <Link href="#contacts">{t('contacts')}</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export { CourseModal };
