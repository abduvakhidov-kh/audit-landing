import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { ContactUs } from './ContactUs';
import { Courses } from './Courses';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Info } from './Info';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Info />
    <Courses />
    <ContactUs />
    <Footer />
  </div>
);

export { Base };
