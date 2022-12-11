import { useTranslation } from 'next-export-i18n';
import Link from 'next/link';
// import { useTranslation } from 'react-i18next';

import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Documents = () => {
  const { t } = useTranslation();

  return (
    <Section
      id="certificates"
      title={<span className="text-primary-800">{t('certificates')}</span>}
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
          <Link href="assets/images/certificate.jpg">
            <a target="_blank">
              <Button>{t('read_more')}</Button>
            </a>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export { Documents };
