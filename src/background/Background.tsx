import { ReactNode } from 'react';

import { useRouter } from 'next/router';

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
  img?: string;
  size?: string;
};

const Background = (props: IBackgroundProps) => {
  const router = useRouter();

  return (
    <div className={`${props.color} img-bg h-full my-auto pt-5`}>
      {props.children}
      <style jsx>{`
        .img-bg {
          background-image: url('${router.basePath}${props.img}');
          background-size: ${props.size ? props.size : '100% 100%'};
        }
      `}</style>
    </div>
  );
};

export { Background };
