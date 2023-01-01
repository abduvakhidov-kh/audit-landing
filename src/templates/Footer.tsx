import { useTranslation } from 'next-export-i18n';
import { BsTelegram } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { ImLocation } from 'react-icons/im';

import { Background } from '../background/Background';
import GoogleMaps from '../feature/Map';
import { Section } from '../layout/Section';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Background color="bg-white">
      <Section id="contacts" yPadding="py-10">
        <div className="flex flex-col items-center sm:gap-2 md:gap-4 md:flex-row">
          <div className="w-full md:w-2/3">
            <GoogleMaps />
          </div>
          <div className="flex flex-col self-start w-full gap-5 mt-0 md:mt-2 md:w-1/3">
            <h3 className="mt-4 text-xl font-bold tracking-tight text-center capitalize sm:mt-0 text-primary-700 dark:text-white">
              {t('our_contacts')}
            </h3>
            {/* Location */}
            <p className="flex items-center gap-2">
              <ImLocation size={20} className="text-primary-500" />
              <span className="font-bold text-black">
                {t('location_address')}
              </span>
            </p>
            {/* phone */}
            <p className="flex items-center gap-2">
              <FiPhoneCall size={20} className="text-primary-500" />
              <span className="font-bold text-black">
                <p>+998 95 189 55 89</p>
                <p>+998 95 197 81 99</p>
                <p>+998 93 183 22 88</p>
              </span>
            </p>
            {/* telegram */}
            <p>
              <p
                className="flex items-center gap-2"
                style={{ display: 'flex' }}
              >
                <BsTelegram size={20} className="text-primary-500" />
                <span className="font-bold text-black">
                  <a href="https://t.me/NOU_AUDITFORWARD">@NOU_AUDITFORWARD</a>
                </span>
              </p>
            </p>
            {/* email */}
            <p>
              <p
                className="flex items-center gap-2"
                style={{ display: 'flex' }}
              >
                <HiOutlineMail size={20} className="text-primary-500" />
                <span className="font-bold text-black">
                  <a href="mailto:auditforward@mail.ru">auditforward@mail.ru</a>
                </span>
              </p>
            </p>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { Footer };
