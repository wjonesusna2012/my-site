import React, { useState } from 'react';
import _ from 'lodash';
import { menuElements, NavigationGridElement } from './constants';
import GridElement from './gridElement';
const NavigationMenu: React.FunctionComponent = () => {
  const [expandedElements, setExpandedElements] = useState([]);
  const toggleExpandedElements = (elementArray, elementToToggle) => {
    setExpandedElements(_.xor(elementArray, [elementToToggle]));
  };

  return (
    <div>
      {menuElements.map((element) => (
        <GridElement
          elements={element.menuElementArray}
          expanded={_.includes(expandedElements, element.menuElementName)}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            toggleExpandedElements(expandedElements, element.menuElementName)
          }
          }
          key={`GridElement${element.menuElementName}`}
        />
      ))}
    </div>
  );
};

export default NavigationMenu;
