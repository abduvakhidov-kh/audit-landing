import { XyzTransition } from '@animxyz/react';
import { useTranslation } from 'next-export-i18n';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <Background color="none" img="/assets/images/bg-image.png" size="auto">
      <Section yPadding="py-5 pb-10" id="groups">
        <XyzTransition appearVisible duration="auto" xyz="fade big delay-2">
          <div className="w-full p-10 mx-auto my-3 rounded-md md:px-12 sm:w-4/5 md:w-1/2 bg-orange-50 background">
            <div className="flex flex-col mx-auto mb-4 text-center">
              <h2 className="mb-4 text-2xl font-medium text-primary-500 sm:text-3xl title-font">
                {t('contact-us_title')}
              </h2>
              <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                {t('contact-us_desc')}
              </p>
            </div>
            <div className="w-full mx-auto">
              <div className="flex flex-wrap w-full m-2">
                <div className="w-full p-2 md:w-1/2">
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
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-primary-500"
                    />
                  </div>
                </div>
                <div className="w-full p-2 md:w-1/2">
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
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-primary-500"
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
                  <button className="flex px-8 py-2 mx-auto text-lg font-semibold text-white border-0 rounded button bg-primary-500 focus:outline-none hover:bg-primary-600">
                    {t('send')}
                  </button>
                </div>
              </div>
            </div>
            <style jsx>
              {`
                .background {
                  -webkit-box-shadow: -2px 1px 8px 6px rgba(34, 60, 80, 0.2);
                  -moz-box-shadow: -2px 1px 8px 6px rgba(34, 60, 80, 0.2);
                  box-shadow: -2px 1px 8px 6px rgba(34, 60, 80, 0.2);
                }
              `}
            </style>
          </div>
        </XyzTransition>
      </Section>
    </Background>
  );
};

export { ContactUs };
