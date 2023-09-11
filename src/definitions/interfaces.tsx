export interface SwipeDataElement {
  optionGroup: string,
  rating: number,
  icon: string,
  description: string,
  title: string,
  improvement: string,
  startDate?: Date,
  externalLink: string,
};

export interface SwipeAssemblyProps {
  swipeData: Array<SwipeDataElement>
};

export interface SwipeAssemblyGridUnitProps {
  rating: number,
  icon: string,
  description: string,
  title: string,
  improvement: string
  externalLink: string,
  startDate?: Date,
};

export interface SwipeAssemblyGridDataProps {
  [index: string]: Array<SwipeAssemblyGridUnitProps>,
};
