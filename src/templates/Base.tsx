// eslint-disable-next-line import/no-extraneous-dependencies
import '@animxyz/core';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Comments } from './Comments';
import { Courses } from './Courses';
import { Documents } from './Documents';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Info } from './Info';
import { Instructors } from './Instructors';

const Base = () => (
  <div className="overflow-x-hidden antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Courses />
    <Info />
    <Instructors />
    <Documents />
    <Comments />
    <Footer />
  </div>
);

export { Base };
