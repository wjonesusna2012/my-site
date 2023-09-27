import React, { useState } from 'react';
import { menuElements } from '../navigation/constants';
import Logo from '../images/logo.png';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
const DrawerMenu: React.FunctionComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
  <React.Fragment>
    <div className='NavFlexContainer'>
    <IconButton onClick={() => setDrawerOpen(curr => !curr)} size="small" aria-label="open drawer">
      <img alt="Logo" style={{display: 'block', padding: '0px 10px', height: '2em', width: '3em'}} src={Logo} />
    </IconButton>
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={() => { setDrawerOpen(false); }}
    >
      <Box sx={{width: 250 }}>
        <List>
            {menuElements.map((element) => (
              <Link to={element.elementPath} onClick={() => {setDrawerOpen(false)}}>
                  <ListItem
                    key={`ListItem${element.elementText}`}
                  >
                    <ListItemButton>
                      <ListItemText primary={element.elementText} />
                    </ListItemButton>
                  </ListItem>
              </Link>
            ))}
        </List>
      </Box>
    </Drawer>
    </div>
  </React.Fragment>
  );
};

export default DrawerMenu;
