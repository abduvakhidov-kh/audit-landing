type ILogoProps = {
  xl?: boolean;
  size?: number;
};

const Logo = (props: ILogoProps) => {
  const size = props.size || (props.xl ? '86' : '64');
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img
        className="mr-1 stroke-current text-primary-500"
        src="/assets/images/logo.png"
        alt="auto kurs"
        width={size}
        height={size}
        loading="eager"
      />
    </span>
  );
};

export { Logo };
