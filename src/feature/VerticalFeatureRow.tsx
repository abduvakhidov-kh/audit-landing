import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title?: string;
  description?: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className('flex', 'flex-wrap', 'items-center', {
    'lg:flex-row-reverse': props.reverse,
  });

  const router = useRouter();

  return (
    <div className={verticalFeatureClass} style={{ justifyContent: 'start' }}>
      <div className="w-full sm:w-1/2 sm:px-4">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
        <div className="mt-2 text-lg">{props.description}</div>
      </div>

      <div className="flex">
        <img
          src={`${router.basePath}${props.image}`}
          style={{ width: '200px' }}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
