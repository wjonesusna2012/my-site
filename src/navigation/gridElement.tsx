import * as React from 'react';
import { useState } from 'react';
import { NavigationGridElement } from './constants';
import '../styles/navigation.css';

interface GridElementProps {
  elements: Array<NavigationGridElement>,
  expanded: boolean,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const GridElement: React.FC<GridElementProps> = ({elements, expanded}) => {
  const [selectedElement, setSelectedElement] = useState('');
  return (
    <div>
      {expanded && elements.map(e =>{ 
        return (
          <div id={e.elementName} onClick={() => setSelectedElement(e.elementName)} className={`{selectedElement === e.elementName ? 'selected' : 'unselected'}`}>
            {e.elementText}
          </div>
        );
        })}
    </div>
  );
};

export default GridElement;