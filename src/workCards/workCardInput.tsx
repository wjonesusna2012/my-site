import type { WorkCardProps } from './WorkCard';
import LinkedIn from '../images/Github.png';
import JPMorgan from '../images/jpmorgan.jpeg';
import JPMorganBackground from '../images/jpmorganbackground.jpeg';
import Syncfab from '../images/syncfab.jpeg';
import SyncfabBackground from '../images/SyncfabBackground.png';
import SearchSide from '../images/searchside.jpeg';
import SearchSideBackground from '../images/SearchSideBackground.jpeg';
import Navy from '../images/navy.jpeg';
import NPTUBackground from '../images/nptubackground.jpeg';
import NNPTCBackground from '../images/nnptcbackground.jpeg';
import HelenaBackground from '../images/helenabackground.jpeg';
import CRABackground from '../images/crabackground.jpg';
import OperationsBackground from '../images/operationsbackground.jpeg';

import Ocean from '../images/Ocean.jpg';
export const workCardDetails: WorkCardProps[] = [
  {
    title: 'Syncfab - Lead Software Engineer',
    durationString: `November 2022 - Present`,
    thumbnailSource: Syncfab,
    mediaSource: SyncfabBackground,
    workSummary: '1 of 2 developers currently improving the Material Management System (MMS) and DApp for Syncfab’s supply chain management system. Our unique application mixes the data-heavy supply chain procurement process with the finality of blockchain technology, looking to incentivize participation for suppliers in a highly asymmetric reward environment.',
    detailList: [
      'Utilized MongoDB (NoSQL), Node.js, Koa, and React.js across the DApp.',
      'Investigating usage of several ML models for optical text recognition and parsing.',
    ],
  },
  {
    title: 'SearchSide - Lead Engineer',
    durationString: `March 2023 - Present`,
    thumbnailSource: SearchSide,
    mediaSource: SearchSideBackground,
    workSummary: 'One of two developers improving an antiquated system for publishing tens of thousands of pages optimized for Google’s search algorithm.',
    detailList: [
      'Investing various AWS services to shift the production system off bare metal.',
      'Upgrading the current DBMS and velocity templating engine to a more modern, scalable framework.',
    ],
  },
  {
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
  }
]
export const navyWorkCardDetails: WorkCardProps[] = [
  {
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
    title: 'US Helena - Operations Officer and Diving Officer',
    durationString: `May 2015 - November 2016`,
    thumbnailSource: Navy,
    mediaSource: OperationsBackground,
    workSummary: 'Summary for OPS work here',
    detailList: [
      'Responsible for planning and certifying the execution of approximately 30 cross-platform operations and coordinating that actions of department heads across 4 departments (Supply, Weapons, Engineering, and Navigation).',
      'Responsible for tracking supply and equipment changes that affect ship\'s weight and balance. Responsible for certifying the ship\'s helmsman and diving officers for operational safety.'
    ],
  },
  {
    title: 'US Helena - Chemisry and Radiological Controls Assistant',
    durationString: `November 2013 - May 20145`,
    thumbnailSource: Navy,
    mediaSource: CRABackground,
    workSummary: 'Summary for CRA work here',
    detailList: [
      'Responsible for overseeing proper planning and maintenance on any chemically radiologically affected systems.',
      'Responsible for maintaining an audit and surveillance program to identify inefficiencies, assess root causes, and promulgate best practices for a zero-fault-tolerance program.'
    ],
  },
  {
    title: 'Student - NNPTC and NPTU',
    durationString: `June 2012 - November 2013`,
    thumbnailSource: Navy,
    mediaSource: NNPTCBackground,
    workSummary: 'A graduate level, rigorous training pipeline developed to teach principles of nuclear engineering, reactor operation, and submarine tactical operations.',
    detailList: [
      'Graduated 1st out of 92 officer canidates, receiving the honor graduate award from the site\'s Commanding Officer.',
    ],
  }
]
