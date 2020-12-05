import * as React from 'react';
import { useState } from 'react';
import { NavigationGridElement } from './constants';
import '../styles/navigation.css';

interface GridElementProps {
  elements: Array<NavigationGridElement>,
  elementText: string,
  expanded: boolean,
  onClick: () => void,
}

const GridElement: React.FC<GridElementProps> = ({elements, expanded, elementText}) => {
  const [selectedElement, setSelectedElement] = useState('');
  return (
    <li className="NavFlexItemStatic">
      {elementText}
      {expanded && elements.map(e =>{ 
        return (
          <div id={e.elementName} onClick={() => setSelectedElement(e.elementName)} className={`{selectedElement === e.elementName ? 'selected NavSubItem' : 'unselected NavSubItem'}`}>
            {e.elementText}
          </div>
        );
        })}
    </li>
  );
};

export default GridElement;