import React, { useState } from 'react';
import {
  CssBaseline,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  Container,
  Collapse,
  List,
  ListItem,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import TaskItem from './components/TaskItem';
import AppDrawer from './components/AppDrawer';
import AddTaskModal from './components/AddTaskModal';
import TaskListModal from './components/TaskListModal';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const App = props => {
  const classes = useStyles();
  const [taskList, setTaskList] = useState([
    {
      id: '1',
      title: 'Title of task',
      body: 'Body of task',
      checked: false,
    },
    {
      id: '2',
      title: 'Completed task title',
      body: 'Completed task body',
      checked: true,
    },
  ]);
  const [state, setState] = useState({ completedActive: false });

  const toggleCompleted = () => {
    setState({ completedActive: !state.completedActive });
  };

  const tasksHandler = {
    tasks: taskList,
    setTasks: setTaskList,
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TaskListModal tasks={taskList} handler={tasksHandler} />
      <footer className={classes.footer}>
        <BottomNavigation showLabels>
          <AppDrawer />

          <AddTaskModal handler={tasksHandler} />
          <BottomNavigationAction label="More" icon={<MoreVertIcon />} />
        </BottomNavigation>
      </footer>
    </div>
  );
};

export default App;

/* Todo
x Checkbox button controls item state
x New entry on Add click
x Render slider window on Menu click
Populate App Drawer
Render popup on More click
x Move tasks from My Tasks to Completed based on checked status
Full-page item view
Add date field to item structure
Add date picker to entry
Add subtask to model
Item action moves to subtask of another item
x Hide completed menu behind clicker
More task lists
Menu actions create task list
Item action moves to another task list
*/

/* Routes
Menu:
  Create new list
  Choose list
  Profile
Add item:
  x title
  x body 
  date
More: 
  Sorty by (date, user)
  Rename list
  Delete list
  Delete all completed
  Theme picker
Items:
  Move sorts order, assigns to subtask
  Swipe deletes
*/
