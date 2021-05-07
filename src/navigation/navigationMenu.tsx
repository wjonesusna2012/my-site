import React from 'react';
import _ from 'lodash';
import { menuElements, NavigationGridElement } from './constants';
import GridElement from './gridElement';
import NameRandomizer from './nameRandomizer';
import Logo from '../images/logo.png';
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
      <div className="NavFlexItemStatic" style={{width: '200px', display: 'flex', justifyContent: 'center'}}>
        <img style={{display: 'block', padding: '0px 10px', height: '2em', width: '3em'}} src={Logo} />
      </div>
    </div>
  );
};

export default NavigationMenu;
