export type NavigationGridElement = {
  elementName: string,
  elementText: string,
};

export type MenuElement = {
  menuElementName: string,
  menuElementText: string,
  menuElementArray: Array<NavigationGridElement>,
};

export const AboutMeElements: Array<NavigationGridElement> = [
  { elementName: 'hobbies', elementText: 'Hobbies' },
  { elementName: 'education', elementText: 'Education' },
];
export const WorkElements: Array<NavigationGridElement> = [
  { elementName: 'frontend', elementText: 'Front End' },
  { elementName: 'backend', elementText: 'Backend' },
  { elementName: 'navy', elementText: 'Navy' },
];

export const StoreElements: Array<NavigationGridElement> = [
  { elementName: 'merchandise', elementText: 'Merch' },
  { elementName: 'projects', elementText: 'Project Materials' },
];

export const menuElements: Array<MenuElement> = [
  { menuElementName: 'about', menuElementText: 'About Me', menuElementArray: AboutMeElements, },
  { menuElementName: 'work', menuElementText: 'Work', menuElementArray: WorkElements },
  { menuElementName: 'store', menuElementText: 'Store', menuElementArray: StoreElements },
];


export const wWords = ['Weather', 'Watermelon', 'Witchcraft'];
export const jWords = ['Jackalope', 'Jezabelle', 'Jazz'];

