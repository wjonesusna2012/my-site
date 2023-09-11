import React from 'react';
import { menuElements } from './constants';
import GridElement from './gridElement';
import NameRandomizer from './nameRandomizer';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
const NavigationMenu: React.FunctionComponent = () => {
  return (
    <div className="NavFlexContainer">
      <NameRandomizer />
      <div className="NavFlexItemGrow">
        <nav className="navigationBar">
          <ul>
            {menuElements.map((element) => (
              <GridElement
                key={`GridElement${element.elementText}`}
                elementText={element.elementText}
                prependedPath={element.elementPath}
              />
            ))}
          </ul>
        </nav>
      </div>
      <div className="NavFlexItemStatic" style={{width: '200px', display: 'flex', justifyContent: 'center'}}>
        <Link to="/">
          <img alt="Logo" style={{display: 'block', padding: '0px 10px', height: '2em', width: '3em'}} src={Logo} />
        </Link>
      </div>
    </div>
  );
};

export default NavigationMenu;
