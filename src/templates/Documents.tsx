import { useTranslation } from 'next-export-i18n';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Documents = () => {
  const { t } = useTranslation();

  return (
    <Background color="bg-gray-100">
      <Section
        yPadding="py-5 pb-10"
        id="certificates"
        title={
          <span className="mb-5 text-primary-500">{t('certificates')}</span>
        }
      >
        <div className="flex items-center justify-center gap-2">
          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center">
              <div className="w-6/12 px-4 sm:w-4/12">
                <img
                  src="/assets/images/certificate.jpg"
                  alt="cerificate"
                  className="h-auto max-w-full align-middle border-none rounded shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { Documents };
