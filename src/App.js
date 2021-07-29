import React, { useEffect, useState } from 'react';
import './App.css';
import IsAComponent from './isa/isAComponent';
import FeaturedComponent from './featured/featuredComponent';
import SwipeAssembly from './swiper/swipeAssembly';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationMenu from './navigation/navigationMenu';
import ScrollCard from './scrollCard/scrollCard';
import { MyContext } from './themes/themeProvider';
import ItemsObject from './scrollCard/constants';
import Ocean from './images/Ocean.jpg';
import Github from './images/Github.png';
import LinkedIn from './images/LinkedIn.png';
import { SwipeAssemblyTestData } from '../src/textFiles/skills';
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
  'a Blockchain Guru',
  'a Bouldering Expert',
  'an Innovative Leader',
  'a Full-Stack Developer',
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
    <Router>
      <div className="App" style={{ position: 'relative' }}>
        <NavigationMenu />
        <Switch>
          <Route exact path="/">
            <IsAComponent
              name="William Jones"
              adjectives={adjectivesList}
              cursorInterval={400}
              typingInterval={150}
              startFlashes={2}
              endFlashes={1}
            />
          </Route>
          <Route path="/about">
            <Switch>
              <Route path="/about/hobbies">
                <ScrollCard items={ItemsObject['AboutHobbiesItems']} />
              </Route>
              <Route path="/about/education">
                <ScrollCard items={ItemsObject['AboutEducationItems']} />
              </Route>
            </Switch>
            <FeaturedComponent
              title="Find Me"
              featuredItems={featuredItemsTest}
            />
          </Route>
          <Route path="/work">
            <Switch>
              <Route path="/work/fullstack">
                <ScrollCard items={ItemsObject['WorkFullstackItems']} />
              </Route>
              <Route path="/work/navy">
                <ScrollCard items={ItemsObject['WorkNavyItems']} />
              </Route>
            </Switch>
            <FeaturedComponent
              title="Find Me"
              featuredItems={featuredItemsTest}
            />
          </Route>
          <Route path="/skills">
            <SwipeAssembly swipeData={SwipeAssemblyTestData.swipeData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
