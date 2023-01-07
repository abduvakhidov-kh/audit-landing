import { Fragment } from 'react';

import { XyzTransition } from '@animxyz/react';
import { useTranslation } from 'next-export-i18n';

import { Section } from '../layout/Section';

const commentsList = ['comments_1'];

const Comments = () => {
  const { t } = useTranslation();

  return (
    <figure className="w-full bg-scroll bg-center bg-cover bg-comments">
      <XyzTransition appearVisible duration="auto" xyz="fade left stagger">
        <div>
          {commentsList.map((comment, index) => (
            <Fragment key={index}>
              <Section yPadding="py-10">
                <div className="p-10 font-semibold text-center bg-white border rounded-md shadow-lg">
                  <img
                    className="w-32 h-32 mx-auto mb-3 rounded-md shadow-lg"
                    src="https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif"
                    alt="product designer"
                  />
                  <h1 className="text-gray-900 text-lxl"> Aziz Yuldoshev </h1>
                  <p className="mt-4 text-gray-700">{t(comment)}</p>
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
