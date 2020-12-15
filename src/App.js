import React, { useEffect, useState } from 'react';
import './App.css';

import NavigationMenu from './navigation/navigationMenu';
import ScrollCard from './scrollCard/scrollCard';
import { MyContext } from './themes/themeProvider';
import ItemsObject from './scrollCard/constants';
import Ocean from './images/Ocean.jpg';

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
      <ScrollCard items={itemsList} />
    </div>
  );
};

export default App;
