import React from "react";
import { useState } from "react";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';


function DrawerComp() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer🧸</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {/* {DrawerList} */}
      </Drawer>
    </div>
  );
}

export default DrawerComp;
