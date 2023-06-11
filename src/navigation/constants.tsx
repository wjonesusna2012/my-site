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
export const menuElements: Array<MenuElement> = [
  { menuElementName: 'Work', menuElementText: 'Work', menuElementArray: WorkElements, menuElementPath: '/work', },
  { menuElementName: 'About', menuElementText: 'About Me', menuElementArray: AboutMeElements, menuElementPath: '/about' },
  { menuElementName: 'Skills', menuElementText: 'Skills', menuElementArray: SkillsElements, menuElementPath: '/skills' },
];

export const wWords = ['Weathered', 'Woodworker', 'Wombo', 'Warrior'];
export const jWords = ['Jack-of-all-trades', 'Jira', 'Jest', 'Jabberwocky', 'Juxtaposition', 'Jacks'];

