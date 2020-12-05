import React, { useState } from 'react';
import _ from 'lodash';
import { menuElements, NavigationGridElement } from './constants';
import GridElement from './gridElement';
const NavigationMenu: React.FunctionComponent = () => {
  const [expandedElements, setExpandedElements] = useState<Array<String>>([]);
  const toggleExpandedElements = (elementArray: Array<String>, elementToToggle: String) => {
    setExpandedElements(_.xor(elementArray, [elementToToggle]));
  };
  console.log('HERE');

  return (
    <div className="NavFlexContainer">
      <div className="NavFlexItemStatic">William Jones Logo</div>
      <div className="NavFlexItemGrow">
  
        <nav className="navigationBar">
          <ul>
            {menuElements.map((element) => (
              <GridElement
                elements={element.menuElementArray}
                expanded={_.includes(expandedElements, element.menuElementName)}
                onClick={(e: MouseEvent) => {
                  e.preventDefault();
                  console.log('HELLO');
                  toggleExpandedElements(expandedElements, element.menuElementName)
                }}
                key={`GridElement${element.menuElementName}`}
                elementText={element.menuElementText}
            ></GridElement> 
            ))}
          </ul>
        </nav>
      </div>
      <div className="NavFlexItemStatic">Placeholder for Toggle</div>
    </div>
  );
};

export default NavigationMenu;
