import React, { useState } from 'react';
import _ from 'lodash';
import { menuElements, NavigationGridElement } from './constants';
import GridElement from './gridElement';
import NameRandomizer from './nameRandomizer';
const NavigationMenu: React.FunctionComponent = () => {
  return (
    <div className="NavFlexContainer">
      <NameRandomizer />
      <div className="NavFlexItemGrow">
        <nav className="navigationBar">
          <ul>
            {menuElements.map((element) => (
              <GridElement
                elements={element.menuElementArray}
                key={`GridElement${element.menuElementName}`}
                elementText={element.menuElementText}
                elementName={element.menuElementName}
            ></GridElement> 
            ))}
          </ul>
        </nav>
      </div>
      <div className="NavFlexItemStatic">William Jones Logo</div>
    </div>
  );
};

export default NavigationMenu;
