import { useTranslation } from 'next-export-i18n';
import Link from 'next/link';
// import { useTranslation } from 'react-i18next';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Background color="bg-gray-100">
      <Section>
        <CenteredFooter logo={<Logo size={120} />}>
          <li>
            <Link href="#why-we">
              <a>{t('why_we')}</a>
            </Link>
          </li>
          <li>
            <Link href="#why-we">
              <a>{t('categories')}</a>
            </Link>
          </li>
          <li>
            <Link href="#groups">
              <a>{t('groups')}</a>
            </Link>
          </li>
          <li>
            <Link href="#contacts">
              <a>{t('contacts')}</a>
            </Link>
          </li>
        </CenteredFooter>
      </Section>
    </Background>
  );
};

export { Footer };
