import { Fragment, ReactNode } from 'react';

import { useTranslation } from 'next-export-i18n';
import Link from 'next/link';
// import { useTranslation } from 'react-i18next';

import { CategoryCard } from '../feature/CategoryCard';
import { Section } from '../layout/Section';

const categoriesData: {
  id: number;
  category: string;
  desctiprion: string;
  price: string;
  button: ReactNode;
}[] = [
  {
    id: 0,
    category: 'B',
    desctiprion: 'b_category',
    price: '> 1.800.000 sum ',
    button: 'book',
  },
  {
    id: 1,
    category: 'BC',
    desctiprion: 'bc_category',
    price: '> 2.300.000 sum',
    button: 'book',
  },
  {
    id: 2,
    category: 'C',
    desctiprion: 'c_category',
    price: '> 1.400.000 sum',
    button: 'book',
  },
  {
    id: 3,
    category: 'E',
    desctiprion: 'e_category',
    price: '> 1.400.000 sum',
    button: 'book',
  },
];

const Categories = () => {
  const { t } = useTranslation();

  return (
    <Section
      yPadding="py-6"
      id="categories"
      title={
        <div className="flex flex-col">
          <div className="text-primary-800">{t('choose_categories')}</div>
          <div className="mx-auto text-sm font-semibold text-center text-gray-600 w-72">
            <sup>*</sup>
            {t('about_price')}
          </div>
        </div>
      }
    >
      <div className="grid w-full gap-4 lg:grid-cols-4 place-items-center md:grid-cols-3 sm:grid-cols-2">
        {categoriesData.map(({ id, category, desctiprion, button, price }) => (
          <Fragment key={id}>
            <CategoryCard
              title={category}
              description={t(`${desctiprion}`)}
              price={price}
              button={
                <Link href="#contacts">
                  <a>
                    <button className="px-3 py-2 font-bold text-white transition rounded bg-primary-500 hover:bg-primary-700">
                      {t(`${button}`)}
                    </button>
                  </a>
                </Link>
              }
            />
          </Fragment>
        ))}
      </div>
    </Section>
  );
};

export { Categories };
