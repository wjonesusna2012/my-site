import React, { useEffect, useState } from 'react';
import './App.css';
// import SwipeCard from './swiper/swipeCard';
import IsAComponent from './isa/isAComponent';
import FeaturedComponent from './featured/featuredComponent';

import NavigationMenu from './navigation/navigationMenu';
import ScrollCard from './scrollCard/scrollCard';
import { MyContext } from './themes/themeProvider';
import ItemsObject from './scrollCard/constants';
import Ocean from './images/Ocean.jpg';
import Github from './images/Github.png';
import LinkedIn from './images/LinkedIn.png';
const featuredItemsTest = [
  {
    linkText: 'GitHub',
    imageName: Github,
    hyperlinkText: 'https://www.github.com/wjonesusna2012',
  },
  {
    linkText: 'LinkedIn',
    imageName: LinkedIn,
    hyperlinkText: 'https://www.linkedin.com/in/william-jones90/',
  },
  {
    linkText: 'Resume',
    imageName: Github,
    hyperlinkText: 'http://isitchristmas.com',
  },
];
const testItems = [{ description: 'Default Ocean', image: Ocean }];
const adjectivesList = [
  'a Blockchain Guru!!!',
  'a Rock Climber.',
  'an Innovative Leader.',
  'a Full-Stack Developer.',
  'a Submarine Officer.',
  'your New Colleague?',
];
const App = () => {
  const context = React.useContext(MyContext);
  const { selected } = context;
  const [itemsList, setItemsList] = useState(
    ItemsObject[`${selected.selectedMenu}${selected.selectedElement}Items`] ||
      testItems
  );
  useEffect(() => {
    setItemsList(
      ItemsObject[`${selected.selectedMenu}${selected.selectedElement}Items`] ||
        testItems
    );
  }, [selected]);
  return (
    <div className="App" style={{ position: 'relative' }}>
      <NavigationMenu />
      <IsAComponent
        name="William Jones"
        adjectives={adjectivesList}
        cursorInterval={400}
        typingInterval={150}
        startFlashes={2}
        endFlashes={1}
      />
      <ScrollCard items={itemsList} />
      <FeaturedComponent title="Find Me" featuredItems={featuredItemsTest} />
      {/* <div style={{ width: '500px', height: '500px' }}>
        <SwipeCard
          leftText="Test1"
          rightText="Test2"
          leftPicture={Ocean}
          rightPicture={Ocean}
        />
      </div> */}
    </div>
  );
};

export default App;
