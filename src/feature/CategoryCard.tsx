import { ReactNode } from 'react';

import className from 'classnames';

type ICategoryCardProps = {
  title: string;
  description?: any;
  reverse?: boolean;
  button?: ReactNode;
  price?: string | number;
};

const CategoryCard = (props: ICategoryCardProps) => {
  const horizontalCardClass = className(
    'py-4',
    'h-full',
    'px-4',
    'my-2',
    'card-wrapper',
    'items-center',
    'bg-gray-200',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  return (
    <div className={horizontalCardClass}>
      <h3 className="text-3xl font-semibold text-center text-primary-800">
        {props.title}
      </h3>
      {props.description && (
        <div className="m-2 font-semibold leading-6 text-center text-gray-700 text-md ">
          {props.description}
        </div>
      )}
      {props.price && (
        <div className="m-1 font-bold leading-6 text-center text-black text-md ">
          {props.price}
        </div>
      )}
      {props.button}
      <style jsx>
        {`
          .card-wrapper {
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            border-radius: 20px;
          }
        `}
      </style>
    </div>
  );
};

export { CategoryCard };
