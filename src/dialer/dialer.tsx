import React from 'react';
import { SpeedDial, SpeedDialAction, Backdrop, SpeedDialIcon, Link } from '@mui/material';
import { featuredItemsTest } from './dialerActions';

const Dialer = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="Contact Dialer"
        sx={{ position: 'fixed', bottom: 16, right: 16}}
        icon={<SpeedDialIcon />}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
      {
        featuredItemsTest.map(f => {
          return (
            <SpeedDialAction 
              key={f.linkText}
              icon={
                <Link href={f.hyperlinkText}>
                  {f.imageName}
                </Link>
              }
              tooltipTitle={f.linkText}
              tooltipOpen
            />
          )
        })
      } 
      </SpeedDial>
    </>
  )
}

export default Dialer;
