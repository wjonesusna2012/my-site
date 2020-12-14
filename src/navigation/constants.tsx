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
  { elementName: 'frontend', elementText: 'Frontend' },
  { elementName: 'backend', elementText: 'Backend' },
  { elementName: 'navy', elementText: 'Navy' },
];

export const StoreElements: Array<NavigationGridElement> = [
  { elementName: 'merchandise', elementText: 'Merch' },
  { elementName: 'projects', elementText: 'Project Materials' },
];

export const contactElements: Array<NavigationGridElement> = [
  { elementName: 'email', elementText: 'Email' },
  { elementName: 'phone', elementText: 'Phone' },
];

export const girlfriendElements: Array<NavigationGridElement> = [
  { elementName: 'job', elementText: 'Job' },
  { elementName: 'personal', elementText: 'Children\'s School', }
];

export const menuElements: Array<MenuElement> = [
  { menuElementName: 'about', menuElementText: 'About Me', menuElementArray: AboutMeElements, },
  { menuElementName: 'work', menuElementText: 'Work', menuElementArray: WorkElements },
  { menuElementName: 'store', menuElementText: 'Store', menuElementArray: StoreElements },
  { menuElementName: 'contact', menuElementText: 'Contact Me', menuElementArray: contactElements },
  { menuElementName: 'girlfriend', menuElementText: 'Girlfriend', menuElementArray: girlfriendElements },
];

export const wWords = ['Wounded', 'Woodworking', 'Weather', 'Wombo', 'Warrior'];
export const jWords = ['Jack-of-all-trades', 'Jira', 'Jazz', 'Jock', 'Jabberwocky', 'Juxtaposition', 'Jack-o-lantern'];

