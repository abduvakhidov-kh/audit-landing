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
    className={`bg-img max-w-screen-xl mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
