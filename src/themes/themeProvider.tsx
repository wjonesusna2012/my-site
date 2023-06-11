import React, { useState } from 'react';

export interface MyContextProps {
  selected: {
    selectedMenu: string,
    selectedElement: string,
    expandedMenu: string,
  },
  setSelected: (selected: MyThemeProps) => void,
};

interface MyThemeProps {
  selected: {
    selectedMenu: string,
    selectedElement: string,
    expandedMenu: string,
  },
}

const defaultContextProps: MyThemeProps = {
  selected: {
    selectedMenu: '',
    selectedElement: '',
    expandedMenu: '',
  },
};

// Create a new context instance with undefined values so that we can pass down
// an update function to the context provider.

export const MyContext = React.createContext<MyContextProps | undefined>(undefined);

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [selectedObject, setSelected] = useState<MyThemeProps>(defaultContextProps);

  return (
    <MyContext.Provider value={{ selected: selectedObject.selected, setSelected}}>
      {children}
    </MyContext.Provider>
  )
};

export default ThemeProvider;