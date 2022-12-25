import { Fragment } from 'react';

import { XyzTransition } from '@animxyz/react';
import { useTranslation } from 'next-export-i18n';

import { Section } from '../layout/Section';

const commentsList = ['comments_1'];

const Comments = () => {
  const { t } = useTranslation();

  return (
    <figure className="bg-slate-100 rounded-xl dark:bg-slate-800">
      <XyzTransition appearVisible duration="auto" xyz="fade left stagger">
        <div>
          {commentsList.map((comment, index) => (
            <Fragment key={index}>
              <Section yPadding="py-10">
                <h5 className="w-full text-2xl font-bold text-center xyz-nested text-primary-500">
                  {t('comments')}
                </h5>
                <div className="flex flex-col items-center justify-center">
                  <div className="pt-6 space-y-4">
                    <blockquote>
                      <p className="w-full text-lg font-medium text-center xyz-nested">
                        {t(comment)}
                      </p>
                    </blockquote>
                  </div>
                </div>
              </Section>
            </Fragment>
          ))}
        </div>
      </XyzTransition>
    </figure>
  );
};

export { Comments };
