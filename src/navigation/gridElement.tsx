import * as React from 'react';
import '../styles/navigation.css';
import { Link, useLocation } from 'react-router-dom';

interface GridElementProps {
  elementText: string,
  prependedPath: string,
}

const GridElement: React.FC<GridElementProps> = ({ elementText, prependedPath }) => {
  const { pathname } = useLocation();
  return (
    <Link to={prependedPath}>
      <li className={'NavFlexItemStatic' + ' ' +  pathname === prependedPath ? 'Expanded SelectedSubItem' : 'NotExpanded'}>
          {elementText}
      </li>
    </Link>
  );
};

export default GridElement;
