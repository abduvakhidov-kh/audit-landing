import { ReactNode } from 'react';

import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: ReactNode;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <div className={`${btnClass} `}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center transition-colors;
          }

          .btn-base {
            @apply text-lg font-semibold  px-8 py-2;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6 bg-primary-600;
          }

          .btn-primary {
            @apply text-white bg-primary-600;
          }

          .btn-primary:hover {
            @apply bg-primary-700;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
