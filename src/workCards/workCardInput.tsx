import type { WorkCardProps } from './WorkCard';
import LinkedIn from '../images/Github.png';
import Ocean from '../images/Ocean.jpg';
export const workCardDetails: WorkCardProps[] = [
  {
    title: 'Syncfab',
    durationString: `November 2022 - Present`,
    thumbnailSource: LinkedIn,
    mediaSource: Ocean,
    workSummary: 'Summary for Syncfab work here',
    detailList: [
      'detail list 1',
      'detail list 2',
    ],
  },
  {
    title: 'JP Morgan & Chase',
    durationString: `April 2019 - March 2023`,
    thumbnailSource: LinkedIn,
    mediaSource: Ocean,
    workSummary: 'Summary for JPM work here',
    detailList: [
      'detail list 1',
      'detail list 2',
    ],
  }
]