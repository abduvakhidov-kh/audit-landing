import { Fragment, ReactNode, useState, useMemo } from 'react';

import { Badge, Button, Modal } from 'flowbite-react';
import { useTranslation } from 'next-export-i18n';
import Link from 'next/link';

import { CourseDifficulty } from '../types';

type IContactModalProps = {
  button?: ReactNode;
  courseData: {
    difficulty: CourseDifficulty;
    period: string;
    description: string;
    price: string;
    instructors: ReactNode;
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
      <span onClick={onClick} className="cursor-pointer">
        {button}
      </span>
      <Modal show={isOpen} onClose={onClose}>
        <Modal.Header>{t('details')}</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              {courseDifficulty}
              <Badge color="info">{courseData.period}</Badge>
            </div>
            <p className="">
              {t('price')} {courseData.price}
            </p>
            <h5>{t('description')}</h5>
            <p className="text-lg font-semibold leading-relaxed text-center text-gray-100">
              {t(`${courseData.description}`)}
            </p>
            <h5>{t('certificates')}</h5>
            <p className="">{courseData.price}</p>
            <h5>{t('teachers')}</h5>
            <p>{courseData.instructors}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose}>
            <Link href="#contacts">{t('book')}</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export { CourseModal };
