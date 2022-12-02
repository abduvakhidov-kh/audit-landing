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
              <a className="hover:text-primary-600 ">{t('why_we')}</a>
            </Link>
          </li>
          <li>
            <Link href="#categories">
              <a className="hover:text-primary-600 ">{t('categories')}</a>
            </Link>
          </li>
          <li>
            <Link href="#groups">
              <a className="hover:text-primary-600">{t('groups')}</a>
            </Link>
          </li>
          <li>
            <Link href="#contacts">
              <a className="hover:text-primary-600 ">{t('contacts')}</a>
            </Link>
          </li>
          <li>
            <Link href={{ href: '/', query: 'lang=uz' }}>
              <a
                className={`hover:text-primary-600 ${
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
                className={`hover:text-primary-600 ${
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
          title={
            <>
              <Logo size={200} />
              <br />
              {t('header')}
            </>
          }
          button={
            <Link href="#contacts">
              <a>
                <Button xl>{t('book')}</Button>
              </a>
            </Link>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
