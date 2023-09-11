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
    <li className={`NavFlexItemStatic ${pathname === prependedPath ? 'Expanded SelectedSubItem' : 'NotExpanded'}`}>
      <Link to={prependedPath}>
        {elementText}
      </Link>
    </li>
  );
};

export default GridElement;
