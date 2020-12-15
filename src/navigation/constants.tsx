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
  { elementName: 'Hobbies', elementText: 'Hobbies' },
  { elementName: 'Education', elementText: 'Education' },
];
export const WorkElements: Array<NavigationGridElement> = [
  { elementName: 'Frontend', elementText: 'Frontend' },
  { elementName: 'Backend', elementText: 'Backend' },
  { elementName: 'Navy', elementText: 'Navy' },
];

export const StoreElements: Array<NavigationGridElement> = [
  { elementName: 'Merchandise', elementText: 'Merch' },
  { elementName: 'Projects', elementText: 'Project Materials' },
];

export const contactElements: Array<NavigationGridElement> = [
  { elementName: 'Email', elementText: 'Email' },
  { elementName: 'Phone', elementText: 'Phone' },
];

export const menuElements: Array<MenuElement> = [
  { menuElementName: 'About', menuElementText: 'About Me', menuElementArray: AboutMeElements, },
  { menuElementName: 'Work', menuElementText: 'Work', menuElementArray: WorkElements },
  { menuElementName: 'Store', menuElementText: 'Store', menuElementArray: StoreElements },
  { menuElementName: 'Contact', menuElementText: 'Contact Me', menuElementArray: contactElements },
];

export const wWords = ['Wounded', 'Woodworking', 'Weather', 'Wombo', 'Warrior'];
export const jWords = ['Jack-of-all-trades', 'Jira', 'Jazz', 'Jock', 'Jabberwocky', 'Juxtaposition', 'Jack-o-lantern'];

