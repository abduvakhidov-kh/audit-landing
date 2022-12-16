import { FC, ReactNode } from 'react';

interface ParagraphProps {
  title: string;
  description: string | ReactNode;
}

const Paragraph: FC<ParagraphProps> = ({ description, title }) => {
  return (
    <>
      <h6 className="font-bold text-primary-500">{title}</h6>
      <p className="ml-2 text-gray-700">{description}</p>
    </>
  );
};

export { Paragraph };
