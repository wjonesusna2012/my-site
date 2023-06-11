import React from 'react';
import { menuElements } from './constants';
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
                prependedPath={element.menuElementPath}
              /> 
            ))}
          </ul>
        </nav>
      </div>
      <div className="NavFlexItemStatic" style={{width: '200px', display: 'flex', justifyContent: 'center'}}>
        <img alt="Logo" style={{display: 'block', padding: '0px 10px', height: '2em', width: '3em'}} src={Logo} />
      </div>
    </div>
  );
};

export default NavigationMenu;
