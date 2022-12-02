import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <div className="items-center mb-6 sm:block md:flex columns space-between">
      <h1 className="w-5/12 mx-auto text-2xl font-bold text-gray-900 whitespace-pre-line sm:text-3xl leading-2 md:text-4xl sm:leading-hero">
        {props.title}
      </h1>
      <img
        src="./assets/images/malibu.png"
        alt="chevrolet malibu rasmi"
        className="mt-4 mb-16"
        loading="lazy"
      />
    </div>

    {props.button}
  </header>
);

export { HeroOneButton };
