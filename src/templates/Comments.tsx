import { Fragment } from 'react';

import { useTranslation } from 'next-export-i18n';

import { Section } from '../layout/Section';

const commentsList = [
  'Курс с тренером Анжелика Анатольевна Ким позволил понять основное назначение и принципы МСФО, посмотреть под другим углом. Появилась заинтересованность к более детальному и плотному изучению. Очень Профессионально преподнесена информация, которая поможет в дальнейшем разбираться подробнее в стандартах. Получили достаточно развернутое представление в части общих понятий по применению практики МСФО. Очень понравился порядок и последовательность изложения материала. Чрезвычайно полезно для понимания решение задач. Спасибо!',
];

const Comments = () => {
  const { t } = useTranslation();
  return (
    <figure className="p-8 mt-6 bg-slate-100 rounded-xl dark:bg-slate-800">
      {commentsList.map((comment, index) => (
        <Fragment key={index}>
          <Section>
            <h5 className="w-full text-2xl font-bold text-center text-primary-600">
              {t('comments')}
            </h5>
            <div className="flex flex-col items-center justify-center">
              <div className="pt-6 space-y-4">
                <blockquote>
                  <p className="w-2/3 mx-auto text-lg font-medium text-center">
                    {comment}
                  </p>
                </blockquote>
              </div>
            </div>
          </Section>
        </Fragment>
      ))}
    </figure>
  );
};

export { Comments };
