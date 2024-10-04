import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Button,
  Divider,
  IconButton,
} from '@mui/material';
import { Box } from '@mui/system';
import TodayIcon from '@mui/icons-material/Today';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const tasks = [
  { id: 1, title: 'Get started by completing this task', date: '30 Sep', completed: true },
  { id: 2, title: 'Download Todoist on all your devices', date: '1 Oct', completed: false },
  { id: 3, title: 'Take the productivity method quiz', date: '2 Oct', completed: false },
  { id: 4, title: 'Browse the Todoist Inspiration Hub', date: 'Yesterday', completed: false },
  { id: 5, title: 'Do a weekly review of my tasks and goals', date: '6 Oct', completed: false },
];

const TaskList = () => (
  <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
    {/* Calendar Header */}
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1rem',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h4">Upcoming</Typography>
        <Typography variant="subtitle1" sx={{ marginLeft: '1rem', color: 'gray' }}>
          October 2024
        </Typography>
      </Box>

      {/* Date Navigation Buttons */}
      <Box>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <TodayIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>

    {/* Days of the Week */}
    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
      <Typography variant="subtitle2">Mon 30</Typography>
      <Typography variant="subtitle2">Tue 1</Typography>
      <Typography variant="subtitle2">Wed 2</Typography>
      <Typography variant="subtitle2">Thu 3</Typography>
      <Typography variant="subtitle2" sx={{ color: 'red' }}>
        Fri 4
      </Typography>
      <Typography variant="subtitle2">Sat 5</Typography>
      <Typography variant="subtitle2">Sun 6</Typography>
    </Box>

    <Divider />

    {/* Overdue Section */}
    <Typography variant="subtitle1" color="textSecondary" sx={{ marginTop: '1rem' }}>
      Overdue
    </Typography>

    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} divider>
          <Checkbox checked={task.completed} />
          <ListItemText
            primary={task.title}
            secondary={task.date}
            sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          />
          {!task.completed && (
            <Button variant="text" size="small">
              Reschedule
            </Button>
          )}
        </ListItem>
      ))}
    </List>

    {/* Add Tasks for Specific Days */}
    <Box sx={{ marginTop: '2rem' }}>
      <Typography variant="subtitle2" color="textSecondary">
        4 Oct · Today · Friday
      </Typography>
      <Button variant="outlined" size="small" sx={{ marginTop: '1rem' }}>
        + Add task
      </Button>
    </Box>

    <Box sx={{ marginTop: '2rem' }}>
      <Typography variant="subtitle2" color="textSecondary">
        5 Oct · Tomorrow · Saturday
      </Typography>
      <Button variant="outlined" size="small" sx={{ marginTop: '1rem' }}>
        + Add task
      </Button>
    </Box>

    <Box sx={{ marginTop: '2rem' }}>
      <Typography variant="subtitle2" color="textSecondary">
        6 Oct · Sunday
      </Typography>
      <Button variant="outlined" size="small" sx={{ marginTop: '1rem' }}>
        + Add task
      </Button>
    </Box>
  </Container>
);

export default TaskList;
