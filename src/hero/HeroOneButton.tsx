import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  button: ReactNode;
  description: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <div className="items-center justify-between mb-2 sm:block md:flex columns ">
      <div className="flex flex-col items-center w-5/12 gap-6">
        <h1 className="mx-auto text-2xl font-bold text-gray-900 whitespace-pre-line sm:text-3xl leading-2 md:text-4xl text-primary-600">
          {props.title}
        </h1>
        {props.description && (
          <p className="text-xl font-semibold text-gray-700">
            {props.description}
          </p>
        )}
        {props.button}
      </div>
      <img src="./assets/images/header.png" alt="header image" loading="lazy" />
    </div>
  </header>
);

export { HeroOneButton };
