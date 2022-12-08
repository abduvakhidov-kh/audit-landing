import { ChangeEvent, Fragment, ReactNode, useState } from 'react';

import { Button, Label, Modal, Textarea, TextInput } from 'flowbite-react';
import { useTranslation } from 'next-export-i18n';
import { BsFillFilePersonFill, BsFillTelephoneFill } from 'react-icons/bs';

type IContactModalProps = {
  button?: ReactNode;
  courseData: {};
};

const CourseModal = (props: IContactModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputsData, setInputsData] = useState({
    clientName: '',
    telNumber: '',
    comment: '',
  });

  const { t } = useTranslation();

  const onClick = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const handleInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputsData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSend = () => {
    fetch(
      `https://api.telegram.org/bot5941746851:AAEXyEVs0rRLzdrmJ-1r0Go4PNU4b5dJHVc/sendMessage?chat_id=642903731&text=Новая+заявка+на+сайте%2C%0A%0AИмя+клиента%3A+${inputsData.clientName}%0AНомер+Телефона+клиента%3A+${inputsData.telNumber}%0AСообщение+клиента%3A+${inputsData.comment}%0A&parse_mode=Markdown`
    );
  };

  return (
    <Fragment>
      <span onClick={onClick} className="cursor-pointer">
        {props.button}
      </span>
      <Modal show={isOpen} onClose={onClose}>
        <Modal.Header>{t('book')}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="block mb-2">
                <Label htmlFor="clientName" value={t('fullname_lable')} />
              </div>
              <TextInput
                id="clientName"
                type="text"
                name="clientName"
                value={inputsData.clientName}
                placeholder={t('fullname_placeholder')}
                onChange={(e) => handleInput(e)}
                required={true}
                icon={BsFillFilePersonFill}
              />
            </div>
            <div>
              <div className="block mb-2">
                <Label htmlFor="telNumber" value={t('telNum_lable')} />
              </div>
              <TextInput
                id="telNumber"
                type="text"
                name="telNumber"
                value={inputsData.telNumber}
                onChange={(e) => handleInput(e)}
                placeholder="+998941234567"
                required={true}
                icon={BsFillTelephoneFill}
              />
            </div>
            <div id="textarea">
              <div className="block mb-2">
                <Label htmlFor="comment" value={t('comment_lable')} />
              </div>
              <Textarea
                id="comment"
                name="comment"
                value={inputsData.comment}
                onChange={(e) => handleInput(e)}
                placeholder={t('comment_placeholder')}
                required={true}
                rows={4}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onSend}>Send</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export { CourseModal };
