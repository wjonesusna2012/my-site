import React, { useEffect, useState } from 'react';
import './App.css';
import SwipeCard from './swiper/swipeCard';
import FeaturedComponent from './featured/featuredComponent';

import NavigationMenu from './navigation/navigationMenu';
import ScrollCard from './scrollCard/scrollCard';
import { MyContext } from './themes/themeProvider';
import ItemsObject from './scrollCard/constants';
import Ocean from './images/Ocean.jpg';
import Github from './images/Github.png';
import LinkedIn from './images/LinkedIn.png';
const featuredItemsTest = [
  { linkText: 'GitHub', imageName: Github },
  { linkText: 'LinkedIn', imageName: LinkedIn },
  { linkText: 'Resume', imageName: Github },
];
const testItems = [{ description: 'Default Ocean', image: Ocean }];
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
    <div className="App">
      <NavigationMenu />
      <h2>{selected.selectedMenu}</h2>
      <h3>{selected.selectedElement}</h3>
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
