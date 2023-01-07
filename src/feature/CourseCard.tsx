import { ReactNode } from 'react';

type CardProps = {
  title: string;
  img: string;
  modal: ReactNode;
};

const CourseCard = ({ title, img, modal }: CardProps) => (
  <div className="relative z-30 w-full h-full overflow-hidden rounded-md shadow-lg card">
    <div className="w-full h-full overflow-hidden overlay image">
      <div className="absolute z-10 w-full h-full bg-black opacity-10"></div>
      <img src={img} alt={title} className="h-full" />
      <h2 className="absolute z-20 text-xl font-extrabold text-white drop-shadow">
        {title}
      </h2>
    </div>
    <div className="absolute bottom-0 left-0 z-20 w-full p-2 bg-white details h-fit">
      {modal}
    </div>

    <style jsx>
      {`
        .card {
          height: 270px;
        }
        .image h2 {
          padding: 10px;
          bottom: 10px;
          transition: 0.4s;
        }
        .card:hover .image h2 {
          bottom: 50px;
        }
        .image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.5s;
        }
        .card:hover .image img {
          transform: translateY(-10%);
        }
        .details {
          transition: 0.5s;
          transform-origin: bottom;
          transform: perspective(2000px) rotateX(-90deg);
        }
        .card:hover .details {
          transform: perspective(2000px) rotateX(0deg);
        }
      `}
    </style>
  </div>
);

export { CourseCard };
