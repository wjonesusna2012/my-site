import nodejs from '../images/nodejs.png';
import navsea08 from '../images/navsea08.jpeg';
import javascript from '../images/javascript.png';
import html5 from '../images/html5.png';
import ethereum from '../images/ethereum.png';
import mongodb from '../images/mongodb.png';
import postgresql from '../images/postgresql.png';
import solidity from '../images/solidity.png';
import python from '../images/python.png';
import reactjs from '../images/react.svg';
import spring from '../images/spring.png';
import storybook from '../images/Storybook.svg';
import jest from '../images/jest.png';
import charteredfinancialanalyst from '../images/cfa.png';
import java from '../images/java.png';
import ecornell from '../images/ecornell.png';
import aws from '../images/aws.png';
import { SwipeAssemblyProps } from '../definitions/interfaces';

export const SwipeAssemblyTestData: SwipeAssemblyProps = {
  swipeData: [
    {
      externalLink: 'https://java.com',
      optionGroup: 'Language',
      rating: 4,
      icon: java,
      description: 'A highly portable, general use programming language. I am very familiar with OO design principles and data structures in the Java STL.',
      title: 'Java',
      improvement: 'I should learn more about Java generics and in particular reified typing.',
      startDate: new Date('10-01-2023'),
    },
    {
      externalLink: 'https://nodejs.org/en',
      optionGroup: 'Framework',
      rating: 3,
      icon: nodejs,
      description: 'An event driven, javascript runtime for multiple platforms. I am most familiar with the crypto, file system, path, and buffer APIs',
      title: 'Node.js',
      improvement: 'The stream API is a jumping off point to working with larger files or data that is not available all at once.',
      startDate: new Date('03-01-2019'),
    },
    {
      externalLink: 'https://react.dev',
      optionGroup: 'Framework',
      rating: 4,
      icon: reactjs,
      description: 'React is the most popular front-end framework for creataing interactive User Interfaces. I am well versed in hooks, contexts, and hydrating server generated DOMs',
      title: 'React.js',
      improvement: 'I look forward to learning more about the React Server Components paradigm.',
      startDate: new Date('03-01-2019'),
    },
    {
      externalLink: 'https://spring.io',
      optionGroup: 'Framework',
      rating: 2,
      icon: spring,
      description: 'Spring is a framework the expedites enterprise Java applications. I am familiar with the basic setup of a new Java application for Web3 development, enabled by Spring Boot',
      title: 'Spring',
      improvement: 'Spring integration with Vault API is of interest particularly with usage for crypto keys for non-3rd party services.',
      startDate: new Date('12-01-2019'),
    },
    {
      externalLink: 'https://storybook.js.org',
      optionGroup: 'Framework',
      rating: 4,
      icon: storybook,
      description: 'A development tool used to render various UI components independently of other components in an application. I have experience setting up components to test edge cases as well as integrate with a test redux store.',
      title: 'Storybook',
      improvement: 'Further improvement in using storybook would be made using snapshots to establish baselines for UI components. I have worked heavily in greenfield, and used storybook more as a tool for testing components in isolation, not tracking changes.',
      startDate: new Date('12-01-2019'),
    },
    {
      externalLink: 'https://jestjs.io',
      optionGroup: 'Framework',
      rating: 2,
      icon: jest,
      description: 'A javascript based testing framework. I am fluent in using setup and teardown hooks, asynchronous tests, mocks, and spies.',
      title: 'Jest',
      improvement: 'Using snapshot testing for React components would be a useful next step.',
      startDate: new Date('12-01-2019'),
    },
    {
      externalLink: 'https://python.org',
      optionGroup: 'Language',
      rating: 3,
      icon: python,
      description: 'I am familiar with Python in relation primarily to machine learning. I have experience through eCornell\'s machine learning course in using numpy, pandas, and tensorflow in addition to python.',
      title: 'Python',
      improvement: 'I\'ve built several backends in Flask, using Python with Django would be an interesting avenue to pursue.',
      startDate: new Date('11-01-2021'),
    },
    {
      externalLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      optionGroup: 'Language',
      rating: 4,
      icon: javascript,
      description: 'I have used javascript in both front and back end contexts. I am familiar with all aspects of ECMAScript 2020.',
      title: 'Javascript',
      improvement: 'I am well versed in langauge fundamentals, and would benefit from looking into WebAPIs. I am particularly interested in the WebAPIs surrounding audio and video streaming.',
      startDate: new Date('03-01-2019'),
    },
    {
      externalLink: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
      optionGroup: 'Language',
      rating: 4,
      icon: html5,
      description: 'I prefer writing HTML and CSS through the React framework as most experience is through Single Page Applications. I have also used styling solutions such as styled components and material UI.',
      title: 'HTML 5',
      improvement: 'I am interested in exploring faster options for writing HTML and CSS such as Emmett or styling solutions such as tailwind. Additional improvement can be gained from ensuring newest HTML tags being used when appropriate.',
      startDate: new Date('03-01-2019'),
    },
    {
      externalLink: 'https://soliditylang.org',
      optionGroup: 'Language',
      rating: 4,
      icon: solidity,
      description: 'A bracketed language used for development of smart contracts. I am familiar and practiced in many common token standards such as ERC-20, 721, and 1155, as well as utility libraries such as SafeMath.',
      title: 'Solidity',
      improvement: 'Investigating new schemes and patterns such as ERC-2535 (diamons), multisig, or mixin contracts to improve my understanding of what safe typical patterns look like in the Ethereum space.',
      startDate: new Date('03-01-2019'),
    },
    {
      externalLink: 'https://ethereum.org',
      optionGroup: 'Standard',
      rating: 4,
      icon: ethereum,
      description: 'Familiar with the mechanics of the ethereum blockchain as outlined in the text "Mastering Ethereum".',
      title: 'Ethereum',
      improvement: 'I look forward to understanding more of how the "Merge" has affected the tokenomics of mining on mainnet.',
      startDate: new Date('03-01-2019'),
    },
    {
      externalLink: 'https://mongodb.com',
      optionGroup: 'Technology',
      rating: 4,
      icon: mongodb,
      description: 'I am familiar with optimizing MongoDB queries, as well as constructing basic analytics from documents across multiple collections.',
      title: 'MongoDB',
      improvement: 'I look forward to developing and validating schemas for document collections to prepare for potential RDB integration.',
      startDate: new Date('11-01-2022'),
    },
    {
      externalLink: 'https://postgresql.org',
      optionGroup: 'Technology',
      rating: 4,
      icon: postgresql,
      description: 'I am familiar with basic queries, joins, optimization strategies, bind variables, and coordinated subqueries.',
      title: 'PostgreSQL',
      improvement: 'I look forward to learning better ways to optimize large queries across multiple data sets with join tables and batch queries.',
      startDate: new Date('03-01-2019'),
    },
  ]
};
export const SwiperProfessionalCerts = [
  {
    externalLink: 'https://navalnuclearlab.energy.gov/nuclear-propulsion-program/',
    optionGroup: 'Certifications',
    rating: 5,
    icon: navsea08,
    description: 'Qualified to be the chief engineer for a US Navy Submarine\'s nuclear power plant. I was recognized as the distinguished officer for the S6G platform by the head of naval reactors.',
    title: 'Nuclear Engineering Officer',
    improvement: '',
    startDate: new Date('06-01-2015'),
  },
  {
    externalLink: 'https://cfainstitute.org',
    optionGroup: 'Certifications',
    rating: 5,
    icon: charteredfinancialanalyst,
    description: 'I received the CFA Institute charter after passing all 3 exams on my first attempt, scoring in the highest graded percentile in every attempt.',
    title: 'CFA Institute Program',
    improvement: 'I am interested in taking the knowledge from this certification and integrating it with my software development background to bring value to an investment firm.',
    startDate: new Date('10-21-2022'),
  },
  {
    externalLink: 'https://ecornell.cornell.edu/certificates/technology/machine-learning/',
    optionGroup: 'Certifications',
    rating: 5,
    icon: ecornell,
    description: 'A series of graduate-level courses focusing on decision trees, kernel machines, linear classifiers, and neural networks.',
    title: 'eCornell Machine Learning and AI',
    improvement: '',
    startDate: new Date('04-01-2022'),
  },
  {
    externalLink: 'https://www.credly.com/badges/47443522-da7c-475c-9744-051a5e49b11c/public_url',
    optionGroup: 'Certifications',
    rating: 5,
    icon: aws,
    description: 'This course teaches skills and knowledge in developing, optimizing, packaging, and deploying applications, using CI/CD workflows, and identifying and resolving application issues',
    title: 'eCornell Machine Learning and AI',
    improvement: '',
    startDate: new Date('09-30-2024'),
  },
];
