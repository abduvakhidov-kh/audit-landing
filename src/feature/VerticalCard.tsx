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
    'flex-col',
    'items-center',
    'justify-between',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="">
        <img
          src={`${router.basePath}${props.image}`}
          style={{ height: '300px' }}
          alt={props.imageAlt}
          loading="lazy"
        />
      </div>
      <div className="w-full sm:px-2">
        {props.title && (
          <h3 className="pl-1 text-3xl font-semibold text-gray-900">
            {props.title}
          </h3>
        )}
        {props.description && (
          <div className="pl-3 mt-2 text-lg font-semibold leading-6 text-center">
            {props.description}
          </div>
        )}
      </div>
    </div>
  );
};

export { VerticalCard };
