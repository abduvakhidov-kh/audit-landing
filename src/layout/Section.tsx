import { ReactNode } from 'react';

type ISectionProps = {
  title?: string | ReactNode;
  description?: string;
  yPadding?: string;
  children: ReactNode;
  id?: string;
  className?: string;
};

const Section = (props: ISectionProps) => (
  <div
    id={props.id}
    className={`max-w-screen-xl mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className="text-center ">
        {props.title && (
          <h2 className="mb-2 text-4xl font-bold text-center">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl text-center md:px-20">
            {props.description}
          </div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
