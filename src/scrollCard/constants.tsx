import Building from '../images/Building.jpg';
import Power from '../images/Power.jpg';
import School from '../images/School.jpg';
import Climbing from '../images/Climbing.jpg';

import Car from '../images/Car.jpg';
import Mountain from '../images/Mountain.jpg';
import Ocean from '../images/Ocean.jpg';

import ClimbingDescription from '../textFiles/climbingDescriptions';

const itemObject = {
  'AboutHobbiesItems': [
    { 
      description: ClimbingDescription.shortDescription,
      image: Climbing, 
      longDescription: ClimbingDescription.longDescription,
    },
    { 
      description: 'Test Description Power', 
      image: Power,
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nulla et ligula mollis hendrerit eu eu sem. Nam varius lacus nec egestas dignissim. Cras in nisl imperdiet, commodo velit eu, rhoncus ligula. Vivamus ac nisi nisl. Sed tempor fringilla odio, eu aliquam risus aliquam quis. Aenean eget ullamcorper leo. Duis et erat vulputate, lacinia quam nec, semper risus. Fusce non velit sit amet erat dictum ultrices eu non neque. Nulla tempus metus magna, id fringilla tortor accumsan eget. Nullam tincidunt, ipsum id finibus fermentum, enim est imperdiet mi, et pretium urna ante porttitor ipsum.',
    },
    { 
      description: 'Test Description Bulding', 
      image: Building,
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nulla et ligula mollis hendrerit eu eu sem. Nam varius lacus nec egestas dignissim. Cras in nisl imperdiet, commodo velit eu, rhoncus ligula. Vivamus ac nisi nisl. Sed tempor fringilla odio, eu aliquam risus aliquam quis. Aenean eget ullamcorper leo. Duis et erat vulputate, lacinia quam nec, semper risus. Fusce non velit sit amet erat dictum ultrices eu non neque. Nulla tempus metus magna, id fringilla tortor accumsan eget. Nullam tincidunt, ipsum id finibus fermentum, enim est imperdiet mi, et pretium urna ante porttitor ipsum.',
     },
  ],
  'AboutEducationItems': [
    { 
      description: 'Test Description Education Car', 
      image: Car,
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nulla et ligula mollis hendrerit eu eu sem. Nam varius lacus nec egestas dignissim. Cras in nisl imperdiet, commodo velit eu, rhoncus ligula. Vivamus ac nisi nisl. Sed tempor fringilla odio, eu aliquam risus aliquam quis. Aenean eget ullamcorper leo. Duis et erat vulputate, lacinia quam nec, semper risus. Fusce non velit sit amet erat dictum ultrices eu non neque. Nulla tempus metus magna, id fringilla tortor accumsan eget. Nullam tincidunt, ipsum id finibus fermentum, enim est imperdiet mi, et pretium urna ante porttitor ipsum.',
    },
    { 
      description: 'Test Description Education Mountain', 
      image: Mountain,
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nulla et ligula mollis hendrerit eu eu sem. Nam varius lacus nec egestas dignissim. Cras in nisl imperdiet, commodo velit eu, rhoncus ligula. Vivamus ac nisi nisl. Sed tempor fringilla odio, eu aliquam risus aliquam quis. Aenean eget ullamcorper leo. Duis et erat vulputate, lacinia quam nec, semper risus. Fusce non velit sit amet erat dictum ultrices eu non neque. Nulla tempus metus magna, id fringilla tortor accumsan eget. Nullam tincidunt, ipsum id finibus fermentum, enim est imperdiet mi, et pretium urna ante porttitor ipsum.',
    },
  ],
};

export default itemObject