// import { useTranslation } from 'react-i18next';
import { useTranslation } from 'next-export-i18n';

import { Section } from '../layout/Section';

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <Section id="groups">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-12 text-center">
          <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            {t('contact-us_title')}
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            {t('contact-us_desc')}
            <p>Генеральный директор : Бабамухамедов А.А</p>
          </p>
        </div>
        <div className="mx-auto lg:w-1/2 md:w-2/3">
          <div className="flex flex-wrap -m-2">
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="text-sm leading-7 text-gray-600"
                >
                  {t('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="tel"
                  className="text-sm leading-7 text-gray-600"
                >
                  {t('tel')}
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel "
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="text-sm leading-7 text-gray-600"
                >
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none resize-none focus:border-indigo-500"
                ></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              <button className="flex px-8 py-2 mx-auto text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { ContactUs };
