import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalCardProps = {
  title?: string;
  description?: any;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalCard = (props: IVerticalCardProps) => {
  const verticalFeatureClass = className(
    'vertical-card',
    'm-4',
    'flex',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full h-full p-3 sm:w-7/12 image-wrapper">
        <img
          src={`${router.basePath}${props.image}`}
          height="320"
          width="420"
          alt={props.imageAlt}
          loading="lazy"
        />
      </div>
      <div className="w-full sm:w-1/2 sm:px-2">
        {props.title && (
          <h3 className="pl-1 text-3xl font-semibold text-gray-900">
            {props.title}
          </h3>
        )}
        {props.description && (
          <div className="pl-3 mt-2 text-lg font-semibold leading-6">
            {props.description}
          </div>
        )}
      </div>
      <style jsx>
        {`
          .image-wrapper {
            min-width: 140px;
            border: 1px solid black;
            border-top-right-radius: 30%;
            border-bottom-left-radius: 30%;
          }
        `}
      </style>
    </div>
  );
};

export { VerticalCard };
