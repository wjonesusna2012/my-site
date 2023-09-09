import nodejs from '../images/nodejs.png';
import navsea08 from '../images/navsea08.jpeg';
import python from '../images/javascript.png';
import javascript from '../images/javascript.png';
import html5 from '../images/html5.png';
import ethereum from '../images/ethereum.png';
import solidity from '../images/solidity.png';
// import css3 from '../images/css.png';
import reactjs from '../images/react.svg';
import spring from '../images/spring.png';
import jest from '../images/jest.png';
import charteredfinancialanalyst from '../images/spring.png';
import { SwipeAssemblyProps } from '../definitions/interfaces';

export const SwipeAssemblyTestData: SwipeAssemblyProps = {
  swipeData: [
    {
      optionGroup: 'Framework',
      rating: 3,
      icon: nodejs,
      description: 'Node.js',
      title: 'Node.js',
      improvement: 'Improvement scheme 1',
      startDate: new Date('03-01-2019'),
    },
    {
      optionGroup: 'Framework',
      rating: 4,
      icon: reactjs,
      description: 'React.js',
      title: 'React.js',
      improvement: 'Improvement scheme 1',
      startDate: new Date('03-01-2019'),
    },
    {
      optionGroup: 'Framework',
      rating: 2,
      icon: spring,
      description: 'Spring',
      title: 'Spring',
      improvement: 'Improvement scheme 1',
      startDate: new Date('12-01-2019'),
    },
    {
      optionGroup: 'Framework',
      rating: 2,
      icon: jest,
      description: 'Jest',
      title: 'Jest',
      improvement: 'Improvement scheme 1',
      startDate: new Date('12-01-2019'),
    },
    {
      optionGroup: 'Programming Language (General Use)',
      rating: 3,
      icon: python,
      description: 'Python',
      title: 'Python',
      improvement: 'Improvement scheme 1',
    },
    {
      optionGroup: 'Programming Language (General Use)',
      rating: 4,
      icon: javascript,
      description: 'Javascript',
      title: 'Javascript',
      improvement: 'Improvement scheme 1',
    },
    {
      optionGroup: 'Scripting Languages',
      rating: 4,
      icon: html5,
      description: 'HTML 5 and CSS',
      title: 'HTML 5',
      improvement: 'Improvement scheme 1',
    },
    {
      optionGroup: 'Programming Language',
      rating: 4,
      icon: solidity,
      description: 'Solidity',
      title: 'Solidity',
      improvement: 'Improvement scheme 1',
    },
    {
      optionGroup: 'Blockchain Standard',
      rating: 4,
      icon: ethereum,
      description: 'Ethereum',
      title: 'Ethereum',
      improvement: 'Improvement scheme 1',
    },
  ]
};
export const SwiperProfessionalCerts = [
  {
    optionGroup: 'Professional Certification',
    rating: 5,
    icon: navsea08,
    description: 'Nuclear Engineering Officer',
    title: 'Nuclear Engineering Officer',
    improvement: 'Improvement scheme 1',
    startDate: new Date('06-01-2015'),
  },
  {
    optionGroup: 'Professional Certifications',
    rating: 5,
    icon: charteredfinancialanalyst,
    description: 'CFA Institute Program',
    title: 'CFA Institute Program',
    improvement: 'Improvement scheme 2',
    startDate: new Date('10-21-2022'),
  },
  {
    optionGroup: 'Professional Certifications',
    rating: 5,
    icon: charteredfinancialanalyst,
    description: 'eCornell Machine Learning and AI',
    title: 'eCornell Machine Learning and AI',
    improvement: 'Improvement scheme 2',
    startDate: new Date('04-01-2022'),
  },
];
