import * as React from 'react';
import { NavigationGridElement } from './constants';
import '../styles/navigation.css';
import { MyContextProps, MyContext } from '../themes/themeProvider';
import { Link } from 'react-router-dom';

interface GridElementProps {
  elements: Array<NavigationGridElement>,
  elementText: string,
  elementName: string,
  prependedPath: string,
}

const GridElement: React.FC<GridElementProps> = ({elements, elementName, elementText, prependedPath}) => {
  // Type cannot be undefined once used
  const context: MyContextProps | undefined = React.useContext<MyContextProps | undefined>(MyContext)!;
  const { selected, setSelected } = context;
  const onClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (selected.expandedMenu === elementName) {
      setSelected({selected: { selectedElement: selected.selectedElement, selectedMenu: selected.selectedMenu, expandedMenu: ''}});
    } else {
      setSelected({selected: { selectedElement: selected.selectedElement, selectedMenu: selected.selectedMenu, expandedMenu: elementName}});
    }
  };
  return (
    <li 
      className={`NavFlexItemStatic ${elementName === selected.expandedMenu ? 'Expanded' : 'NotExpanded'} ${selected.selectedMenu === elementName ? 'SelectedSubItem' : ''}`} 
      onClick={onClickHandler}
    >
      {elementText}
      {elementName === selected.expandedMenu ? (<div className="NavSubItem">
        {elements.map(e => { 
        return (
            <div id={e.elementName} onClick={(m: React.MouseEvent<HTMLDivElement>) => {
                m.stopPropagation();
                setSelected({selected: { expandedMenu: '', selectedElement: e.elementName, selectedMenu: elementName }});
              }}
              className={`SubMenuItem ${selected.selectedElement === e.elementName ? 'selected' : 'unselected'}`}>
              <Link to={`${prependedPath}${e.elementPath}`}>
                {e.elementText}
              </Link>
            </div>
        );
        })}
        </div>) : ''}
    </li>
  );
};

export default GridElement;