import type { WorkCardProps } from './WorkCard';
import JPMorgan from '../images/jpmorgan.jpeg';
import JPMorganBackground from '../images/jpmorganbackground.jpeg';
import Syncfab from '../images/syncfab.jpeg';
import RTX from '../images/rtx.png';
import RTXBackground from '../images/RTXBackground.jpeg';
import SyncfabBackground from '../images/SyncfabBackground.png';
import SearchSide from '../images/searchside.jpeg';
import SearchSideBackground from '../images/SearchSideBackground.jpeg';
import Navy from '../images/navy.jpeg';
import NPTUBackground from '../images/nptubackground.jpeg';
import NNPTCBackground from '../images/nnptcbackground.jpeg';
import CRABackground from '../images/crabackground.jpg';
import OperationsBackground from '../images/operationsbackground.jpeg';
import NSA from '../images/NSA.png';
import NSABackground from '../images/NSABackground.jpeg';
import CapitalOne from '../images/CapitalOne.png'
import CapitalOneBackground from '../images/CapitalOneBackground.jpeg';

export const workCardDetails: WorkCardProps[] = [
  {
    externalLink: 'https://capitalone.com',
    title: 'Capital One - Senior Software Engineer',
    durationString: `October 2024 - Present`,
    thumbnailSource: CapitalOne,
    mediaSource: CapitalOneBackground,
    workSummary: 'Senior software developer on an agile, Java software development team responsible for delivering and maintaining scalable systems that are AWS native and span both front and back ends.',
    detailList: [
      'Utilizes Java 8, MySQL, JUnit testing frameworks, Cypress, Apache Beam, and AWS.',
      'Focusing on building highly tested front-end user experiences along with streamlining processing of hundreds of thousands of account information, integrated with ML models to maximize customer retentionn and success.',
    ],
  },
  {
    externalLink: 'https://rtx.com',
    title: 'RTX (Cypher, LLC) - Senior Java Developer',
    durationString: `October 2023 - October 2024`,
    thumbnailSource: RTX,
    mediaSource: RTXBackground,
    workSummary: 'Senior software developer on an agile, Java software development team responsible for delivering highly resilient systems.',
    detailList: [
      'Utilizes Java 8, MySQL, JUnit testing frameworks, Equinox, and AWS.',
      'Increased focus on process improvement, including filling in knowledge gaps for newer employees and documentation for constantly evolving features.',
    ],
  },
  {
    externalLink: 'https://syncfab.com',
    title: 'Syncfab - Lead Software Engineer',
    durationString: `November 2022 - Present`,
    thumbnailSource: Syncfab,
    mediaSource: SyncfabBackground,
    workSummary: 'Lead developer currently improving the Material Management System (MMS) and DApp for Syncfab’s supply chain management system. Also responsible for devops for our production platform. Our unique application mixes the data-heavy supply chain procurement process with the finality of blockchain technology, looking to incentivize participation for suppliers in a highly asymmetric reward environment.',
    detailList: [
      'Utilized MongoDB (NoSQL), Node.js, Koa, and React.js across the DApp.',
      'Investigating usage of several ML models for optical text recognition and parsing.',
      'Utilizes AWS EC2 instances, Docker, and Atlas for deploying production and UAT applications.',
    ],
  },
  {
    externalLink: 'https://searchside.com',
    title: 'SearchSide - Lead Engineer',
    durationString: `March 2023 - December 2023`,
    thumbnailSource: SearchSide,
    mediaSource: SearchSideBackground,
    workSummary: 'One of two developers improving an antiquated system for publishing tens of thousands of pages optimized for Google’s search algorithm.',
    detailList: [
      'Investing various AWS services to shift the production system off bare metal.',
      'Upgrading the current DBMS and velocity templating engine to a more modern, scalable framework.',
    ],
  },
  {
    externalLink: 'https://www.jpmorgan.com/onyx/index',
    title: 'JP Morgan & Chase - Senior Associate Software Developer',
    durationString: `April 2019 - March 2023`,
    thumbnailSource: JPMorgan,
    mediaSource: JPMorganBackground,
    workSummary: 'One of three full stack  developers responsible for JPMorgan Onyx Digital Assets’ first DApp, Intraday Repo. This app provides access to our flagship JPMCoin distributed ledger to enable near-instantaneous trading of collateral and cash instruments.',
    detailList: [
      'Investigated upgradability schemas such as ERC-2535 for future greenfield projects',
      'Utilized MySQL/PostgreSQL, Node.js, Express, React.js, and web3.js to create a DApp for the Intraday Repo platform',
      'Utilized Truffle, Ganache, and Mocha to develop version 2 contracts for repo as well as Proof-of-concept platforms for future unreleased products.',
    ],
  },
  {
    externalLink: 'https://www.nsa.gov',
    title: 'National Security Agency - Summer Intern',
    durationString: `June 2011 - July 2011`,
    thumbnailSource: NSA,
    mediaSource: NSABackground,
    workSummary: 'Worked on an interdisciplenary team investigating network protocols for targeted applications.',
    detailList: [
      'Utilized Visual C++ 2008 (9.0) to work on a large (80+ GB interdisciplenary project)',
      'Created a cryptographically secure implementation to integrate with network protocols ',
    ],
  }
]
export const navyWorkCardDetails: WorkCardProps[] = [
  {
    externalLink: 'https://www.navsea.navy.mil/Home/NPTU/Charleston/',
    title: 'Nuclear Power Training Unit - Shift Engineer, MTS 635',
    durationString: `November 2016 - March 2019`,
    thumbnailSource: Navy,
    mediaSource: NPTUBackground,
    workSummary: 'Responsible for the overall operations and training for Crew Charlie on a 60+ year old nuclear power plant, with the overall goal of providing safe, meaningful instruction for the hundreds of nuclear operators that pass through our doors every year.',
    detailList: [
      'Hand selected by the training site’s commanding officer for immediate promotion to lead shift engineer. Trusted to lead casualty response and training for our nuclear power plants.',
      'Mentored hundreds of officer nuclear candidates to become safe and trusted nuclear operators.',
    ],
  },
  {
    externalLink: 'https://www.sublant.usff.navy.mil/SSN725/',
    title: 'US Helena - Operations Officer and Diving Officer',
    durationString: `May 2015 - November 2016`,
    thumbnailSource: Navy,
    mediaSource: OperationsBackground,
    workSummary: 'As the operations officer, I was responsible for coordinating the operations of the ship\'s crew and ensuring the needs of external stakeholders are met. I was also responsible for troubleshooting and integrating several new features in our navigation/fire control as well as providing feedback reports to developers on several new navigation features that had not been previously integrated in a fast attack submarine.',
    detailList: [
      'Responsible for planning and certifying the execution of approximately 30 cross-platform operations and coordinating that actions of department heads across 4 departments (Supply, Weapons, Engineering, and Navigation).',
      'Responsible for tracking supply and equipment changes that affect ship\'s weight and balance. Responsible for certifying the ship\'s helmsman and diving officers for operational safety.'
    ],
  },
  {
    externalLink: 'https://www.sublant.usff.navy.mil/SSN725/',
    title: 'US Helena - Chemisry and Radiological Controls Assistant',
    durationString: `November 2013 - May 20145`,
    thumbnailSource: Navy,
    mediaSource: CRABackground,
    workSummary: 'The CRA is overall accountable to the ship\'s engineer for the proper maintenance, surveillance, and auditing of all radiological and chemistry related work on the submarine.',
    detailList: [
      'Responsible for overseeing proper planning and maintenance on any chemically radiologically affected systems.',
      'Responsible for maintaining an audit and surveillance program to identify inefficiencies, assess root causes, and promulgate best practices for a zero-fault-tolerance program.'
    ],
  },
  {
    externalLink: 'https://www.navsea.navy.mil/Home/NNPTC/',
    title: 'Student - NNPTC and NPTU',
    durationString: `June 2012 - November 2013`,
    thumbnailSource: Navy,
    mediaSource: NNPTCBackground,
    workSummary: 'A graduate level, rigorous training pipeline developed to teach principles of nuclear engineering, reactor operation, and submarine tactical operations.',
    detailList: [
      'Graduated first out of ninety-two officer candidates, receiving the honor graduate award from the site\'s Commanding Officer.',
    ],
  }
]
