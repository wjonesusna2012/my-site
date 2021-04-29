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
  { elementName: 'Fullstack', elementText: 'Full-stack' },
  { elementName: 'Navy', elementText: 'Navy' },
];

export const StoreElements: Array<NavigationGridElement> = [
  { elementName: 'Merchandise', elementText: 'Merch' },
  { elementName: 'Projects', elementText: 'Project Materials' },
];

export const SkillsElements: Array<NavigationGridElement> = [
  { elementName: 'Skills', elementText: 'Soft Skills' },
  { elementName: 'Accredations', elementText: 'Accredations' },
]

export const contactElements: Array<NavigationGridElement> = [
  { elementName: 'Email', elementText: 'Email' },
  { elementName: 'Phone', elementText: 'Phone' },
];

export const menuElements: Array<MenuElement> = [
  { menuElementName: 'Work', menuElementText: 'Work', menuElementArray: WorkElements },
  // { menuElementName: 'Store', menuElementText: 'Store', menuElementArray: StoreElements },
  { menuElementName: 'About', menuElementText: 'About Me', menuElementArray: AboutMeElements, },
  { menuElementName: 'Skills', menuElementText: 'Skills', menuElementArray: SkillsElements, },
  { menuElementName: 'Contact', menuElementText: 'Contact Me', menuElementArray: contactElements },
];

export const wWords = ['Wounded', 'Woodworking', 'Weather', 'Wombo', 'Warrior'];
export const jWords = ['Jack-of-all-trades', 'Jira', 'Jazz', 'Jock', 'Jabberwocky', 'Juxtaposition', 'Jack-o-lantern'];

