import React from "react";
import { useState } from "react";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Explorer from "./Explorer";


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
        <Explorer></Explorer>
      </Drawer>
    </div>
  );
}

export default DrawerComp;
