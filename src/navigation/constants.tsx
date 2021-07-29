export type NavigationGridElement = {
  elementName: string,
  elementText: string,
  elementPath: string,
};

export type MenuElement = {
  menuElementName: string,
  menuElementText: string,
  menuElementArray: Array<NavigationGridElement>,
  menuElementPath: string,
};

export const AboutMeElements: Array<NavigationGridElement> = [
  { elementName: 'Hobbies', elementText: 'Hobbies', elementPath: '/hobbies', },
  { elementName: 'Education', elementText: 'Education', elementPath: '/education', },
];
export const WorkElements: Array<NavigationGridElement> = [
  { elementName: 'Fullstack', elementText: 'Full-stack', elementPath: '/fullstack', },
  { elementName: 'Navy', elementText: 'Navy', elementPath: '/navy' },
];


export const SkillsElements: Array<NavigationGridElement> = [
  { elementName: 'Skills', elementText: 'Soft Skills', elementPath: '/skills' },
  { elementName: 'Accredations', elementText: 'Accredations', elementPath: '/accredations' },
]

export const contactElements: Array<NavigationGridElement> = [
  { elementName: 'Email', elementText: 'Email', elementPath: '/email', },
  { elementName: 'Phone', elementText: 'Phone', elementPath: '/phone' },
];

export const menuElements: Array<MenuElement> = [
  { menuElementName: 'Work', menuElementText: 'Work', menuElementArray: WorkElements, menuElementPath: '/work', },
  { menuElementName: 'About', menuElementText: 'About Me', menuElementArray: AboutMeElements, menuElementPath: '/about' },
  { menuElementName: 'Skills', menuElementText: 'Skills', menuElementArray: SkillsElements, menuElementPath: '/skills' },
  { menuElementName: 'Contact', menuElementText: 'Contact Me', menuElementArray: contactElements, menuElementPath: '/contact' },
];

export const wWords = ['Wounded', 'Woodworking', 'Weather', 'Wombo', 'Warrior'];
export const jWords = ['Jack-of-all-trades', 'Jira', 'Jazz', 'Jock', 'Jabberwocky', 'Juxtaposition', 'Jack-o-lantern'];

