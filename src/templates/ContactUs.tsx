import { ChangeEvent, useState } from 'react';

import { XyzTransition } from '@animxyz/react';
import { Label, TextInput, Textarea } from 'flowbite-react';
import { useTranslation } from 'next-export-i18n';
import { BsFillFilePersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { FaPencilAlt } from 'react-icons/fa';

const ContactUs = () => {
  const { t } = useTranslation();
  const [inputsData, setInputsData] = useState({
    clientName: '',
    telNumber: '',
    comment: '',
  });

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
      `https://api.telegram.org/bot5901853255:AAE_iq7-gJwaDkcHGwSRtl2vSjmLEUt3GMQ/sendMessage?chat_id=-793747320&text=Новая+заявка+на+сайте%2C%0A%0AИмя+клиента%3A+${inputsData.clientName}%0AНомер+Телефона+клиента%3A+${inputsData.telNumber}%0AСообщение+клиента%3A+${inputsData.comment}%0A&parse_mode=Markdown`
    );
  };

  return (
    <div
      className="flex flex-col w-full px-4 py-2 bg-white rounded-md lg:py-6 lg:px-10"
      rounded-md
    >
      <XyzTransition appearVisible duration="auto" xyz="fade big">
        <div className="w-full">
          <div className="flex flex-col mx-auto mb-4">
            <div className="flex items-center justify-between w-full mb-4">
              <h2 className="text-2xl font-bold text-primary-500 sm:text-3xl title-font">
                {t('contact-us_title')}
              </h2>
              <FaPencilAlt size={24} />
            </div>
            <p className="w-full text-base leading-relaxed">
              {t('contact-us_desc')}
            </p>
          </div>
          <div className="w-full mx-auto">
            <div className="w-full space-y-4 lg:space-y-4">
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
          </div>
          <div className="w-full py-4">
            <button
              onClick={onSend}
              className="flex px-8 py-2 text-lg text-white border-0 rounded button bg-primary-500 focus:outline-none hover:bg-primary-600"
            >
              {t('send')}
            </button>
          </div>
        </div>
      </XyzTransition>
      <XyzTransition appearVisible duration="auto" xyz="fade big">
        <div className="flex flex-col gap-2 mb-4">
          <h2 className="text-2xl font-medium text-primary-500 sm:text-3xl">
            {t('student_count_title')}
          </h2>
          <p className="w-full text-base leading-relaxed">
            {t('student_count_desc')}
          </p>
          <ul className="flex items-center gap-2">
            <li className="flex items-center justify-center w-20 h-20 text-4xl text-black bg-gray-200 border-2 border-black rounded-md">
              <p>1</p>
            </li>
            <li className="flex items-center justify-center w-20 h-20 text-4xl text-black bg-gray-200 border-2 border-black rounded-md">
              <p>0</p>
            </li>
            <li className="flex items-center justify-center w-20 h-20 text-4xl text-black bg-gray-200 border-2 border-black rounded-md">
              <p>2</p>
            </li>
            <li className="flex items-center justify-center w-20 h-20 text-4xl text-black bg-gray-200 border-2 border-black rounded-md">
              <p>5</p>
            </li>
            <li className="flex items-center justify-center w-20 h-20 text-4xl text-black bg-gray-200 border-2 border-black rounded-md">
              <p>4</p>
            </li>
          </ul>
        </div>
      </XyzTransition>
    </div>
  );
};

export { ContactUs };
