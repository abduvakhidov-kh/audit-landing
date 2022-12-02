import { Card } from 'flowbite-react';
import { useTranslation } from 'next-export-i18n';
import Link from 'next/link';
// import { useTranslation } from 'react-i18next';

import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const Documents = () => {
  const { t } = useTranslation();

  return (
    <Section
      id="groups"
      title={<span className="text-primary-800">{t('documents')}</span>}
    >
      <div className="flex items-center justify-center gap-2">
        <Card>
          <div className="flex flex-col items-center gap-4">
            <h5 className="text-2xl font-bold text-black">
              {t('documents_for_study')}
            </h5>
            <ul className="px-2 text-lg font-semibold list-disc">
              <li className="ml-6">{t('passport')}</li>
              <li className="ml-6">{t('medical')}</li>
              <li className="ml-6">{t('photo')}</li>
            </ul>
            <div className="mt-2 cursor-pointer">
              <Link href="assets/images/license.png">
                <a target="_blank">
                  <Button>{t('license')}</Button>
                </a>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export { Documents };
