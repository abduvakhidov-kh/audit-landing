import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { CarPark } from './CarPark';
import { Categories } from './Categories';
import { ClassTimings } from './ClassTimings';
import { Documents } from './Documents';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Info } from './Info';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Info />
    <Categories />
    <CarPark />
    <ClassTimings />
    <Documents />
    <Footer />
  </div>
);

export { Base };
