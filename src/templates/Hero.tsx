import { XyzTransition } from '@animxyz/react';
import { useTranslation } from 'next-export-i18n';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const route = useRouter();
  const { t } = useTranslation();

  return (
    <div className="h-screen">
      <div className="w-full">
        <NavbarTwoColumns logo={<Logo />}>
          <li>
            <Link href="#about_us">
              <a className="text-base lg:text-xl hover:text-primary-800">
                {t('about_us')}
              </a>
            </Link>
          </li>
          <li>
            <Link href="#courses">
              <a className="text-base lg:text-xl hover:text-primary-800">
                {t('courses')}
              </a>
            </Link>
          </li>
          <li>
            <Link href="#staff">
              <a className="text-base lg:text-xl hover:text-primary-800">
                {t('staff')}
              </a>
            </Link>
          </li>
          <li>
            <Link href="#contacts">
              <a className="text-base lg:text-xl hover:text-primary-800 ">
                {t('contacts')}
              </a>
            </Link>
          </li>
          <li>
            <Link href={{ href: '/', query: 'lang=uz' }}>
              <a
                className={`hover:text-primary-800 text-base lg:text-xl ${
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
                className={`hover:text-primary-800 text-base lg:text-xl ${
                  route.locale === 'ru' && 'underline-offset-1'
                }`}
              >
                🇷🇺
              </a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </div>
      <div className="flex items-center mx-3 bg-fixed bg-center bg-cover lg:mx-4 h-90 lg:h-87 bg-hero">
        <Section yPadding="py-0" id="centered-header">
          <XyzTransition
            appear
            duration="auto"
            xyz="fade small stagger ease-out-back duration-30"
          >
            <div>
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
            </div>
          </XyzTransition>
        </Section>
      </div>
      <style jsx>
        {`
          .h-90 {
            height: 90%;
          }
          .h-87 {
            height: 87%;
          }
        `}
      </style>
    </div>
  );
};

export { Hero };
