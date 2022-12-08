import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Courses } from './Courses';
import { Hero } from './Hero';
import { Info } from './Info';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Info />
    <Courses />
  </div>
);

export { Base };
