import { Fragment, ReactNode, useState } from 'react';

import { Button, Modal } from 'flowbite-react';
import { useTranslation } from 'next-export-i18n';

type IContactModalProps = {
  button?: ReactNode;
  courseData: {
    difficulty: string;
    period: string;
    price: string;
    isBeginer: boolean;
  };
};

const CourseModal = (props: IContactModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  const onClick = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Fragment>
      <span onClick={onClick} className="cursor-pointer">
        {props.button}
      </span>
      <Modal show={isOpen} onClose={onClose}>
        <Modal.Header>{t('details')}</Modal.Header>
        <Modal.Body>
          <div>modal content</div>
        </Modal.Body>
        <Modal.Footer>
          <Button>Send</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export { CourseModal };
