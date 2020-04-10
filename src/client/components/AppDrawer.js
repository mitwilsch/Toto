import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  BottomNavigationAction,
  Drawer,
  makeStyles,
} from '@material-ui/core/';
import { Menu } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  fullList: {
    width: 'auto',
  },
}));

const AppDrawer = () => {
  const classes = useStyles();

  const [isActive, setIsActive] = useState(false);

  const toggleDrawer = () => {
    setIsActive(!isActive);
  };

  const list = () => (
    <div className={classes.fullList} onClick={() => toggleDrawer()}>
      <List>
        <ListItem button>
          <ListItemText primary="Hello World" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <BottomNavigationAction
        label="Menu"
        icon={<Menu />}
        onClick={() => toggleDrawer()}
      />
      <Drawer anchor="bottom" open={isActive} onClose={() => toggleDrawer()}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
};
export default AppDrawer;
