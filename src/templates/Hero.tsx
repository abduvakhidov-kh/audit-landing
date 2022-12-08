import { useTranslation } from 'next-export-i18n';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { useTranslation } from 'react-i18next';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const route = useRouter();
  const { t } = useTranslation();

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-5">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="#why-we">
              <a className="text-sm hover:text-primary-600">{t('about_us')}</a>
            </Link>
          </li>
          <li>
            <Link href="#categories">
              <a className="text-sm hover:text-primary-600 ">
                {t('portfolio')}
              </a>
            </Link>
          </li>
          <li>
            <Link href="#groups">
              <a className="text-sm hover:text-primary-600">{t('courses')}</a>
            </Link>
          </li>
          <li>
            <Link href="#staff">
              <a className="text-sm hover:text-primary-600">{t('staff')}</a>
            </Link>
          </li>
          <li>
            <Link href="#license">
              <a className="text-sm hover:text-primary-600">{t('license')}</a>
            </Link>
          </li>
          <li>
            <Link href="#contacts">
              <a className="text-sm hover:text-primary-600 ">{t('contacts')}</a>
            </Link>
          </li>
          <li>
            <Link href={{ href: '/', query: 'lang=uz' }}>
              <a
                className={`hover:text-primary-600 text-sm ${
                  route.locale === 'uz' && 'text-underline'
                }`}
              >
                🇺🇿
              </a>
            </Link>
          </li>
          <li>
            <Link href={{ href: '/', query: 'lang=ru' }}>
              <a
                className={`hover:text-primary-600 text-sm ${
                  route.locale === 'ru' && 'underline-offset-1'
                }`}
              >
                🇷🇺
              </a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={t('header_title')}
          description={t('header_desc') as string}
          button={
            <Link href="#courses">
              <a>
                <Button xl>{t('courses')}</Button>
              </a>
            </Link>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
