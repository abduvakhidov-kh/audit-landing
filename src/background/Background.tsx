import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
  img?: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={`${props.color} img-bg`}>
    {props.children}
    <style jsx>{`
      .img-bg {
        background-image: url('${props.img}');
        background-size: cover;
      }
    `}</style>
  </div>
);

export { Background };
