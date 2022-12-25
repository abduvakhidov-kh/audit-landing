import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  button: ReactNode;
  description: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="flex items-center justify-between my-auto mb-2 text-center sm:block md:flex columns">
    <div className="flex flex-col items-center justify-center w-full h-full gap-6 xyz-nested md:w-full sm:w-full">
      <h1 className="w-full mx-auto text-2xl font-bold text-center whitespace-pre-line sm:text-3xl leading-2 md:text-4xl text-primary-600">
        {props.title}
      </h1>
      {props.description && (
        <p className="w-full text-xl font-semibold text-center text-gray-700">
          {props.description}
        </p>
      )}
      {props.button}
    </div>
    <img
      src="./assets/images/header.png"
      alt="header image"
      loading="lazy"
      className="hidden w-full xyz-nested md:block md:w-2/3"
    />
    <style jsx>
      {`
        .img {
          width: 100%;
        }
        .centered {
          margin-top: auto;
          margin-bottom: auto;
        }
      `}
    </style>
  </header>
);

export { HeroOneButton };
