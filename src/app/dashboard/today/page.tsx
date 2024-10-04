'use client';

import React, { useState } from 'react';

import { ExpandMore, DragIndicator } from '@mui/icons-material';
import {
  Box,
  Tab,
  List,
  Chip,
  Tabs,
  Paper,
  ListItem,
  Checkbox,
  Accordion,
  Typography,
  ListItemIcon,
  ListItemText,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import { KanbanView } from 'src/sections/kanban/view';

// const TopBar = () => (
//   <Box
//     sx={{
//       display: 'flex',
//       justifyContent: 'flex-end',
//       p: 2,
//       borderBottom: 1,
//       borderColor: 'divider',
//     }}
//   >
//     <IconButton>
//       <Notifications />
//     </IconButton>
//     <IconButton>
//       <Settings />
//     </IconButton>
//     <Avatar sx={{ bgcolor: 'secondary.main', ml: 1 }}>S</Avatar>
//   </Box>
// );

const tasks = [
  {
    name: 'Brand Guidelines Discussion Meeting',
    project: 'Nomina',
    date: '30-10-2024',
    priority: 'High',
    status: 'To Do',
  },
  {
    name: 'Finalizing Nomina Workflow Documentation With the Client',
    project: 'Nomina',
    date: '30-10-2024',
    priority: 'Low',
    status: 'In Progress',
  },
  {
    name: 'Software Development Kit for Nomina Mobile Application',
    project: 'Nomina',
    date: '30-05-2024',
    priority: 'Low',
    status: 'Done',
  },
  {
    name: 'Finalizing Nomina Workflow Documentation With the Client',
    project: 'Nomina',
    date: '30-05-2024',
    priority: 'Low',
    status: 'To Do',
  },
  {
    name: 'Software Development Kit for Nomina Mobile Application',
    project: 'Nomina',
    date: '30-05-2024',
    priority: 'Low',
    status: 'In Progress',
  },
  {
    name: 'Brand Guidelines Discussion Meeting',
    project: 'Nomina',
    date: '30-10-2024',
    priority: 'Low',
    status: 'Done',
  },
];

const TaskList = () => (
  <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMore />}>
      <Typography variant="h6">Today's Tasks (15 due)</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} sx={{ borderBottom: 1, borderColor: 'divider', py: 2 }}>
            <ListItemIcon>
              <Checkbox edge="start" />
            </ListItemIcon>
            <ListItemText primary={task.name} secondary={`${task.project} • Due: ${task.date}`} />
            <Chip
              label={task.priority}
              size="small"
              color={task.priority === 'High' ? 'error' : 'success'}
            />
          </ListItem>
        ))}
      </List>
    </AccordionDetails>
  </Accordion>
);

const KanbanColumn = ({ title, tasks }) => (
  <Paper elevation={3} sx={{ minWidth: 300, m: 1, p: 2 }}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index} sx={{ border: 1, borderColor: 'divider', borderRadius: 1, mb: 1 }}>
          <ListItemIcon>
            <DragIndicator />
          </ListItemIcon>
          <ListItemText primary={task.name} secondary={`${task.project} • Due: ${task.date}`} />
          <Chip
            label={task.priority}
            size="small"
            color={task.priority === 'High' ? 'error' : 'success'}
          />
        </ListItem>
      ))}
    </List>
  </Paper>
);

const KanbanBoard = () => (
  <Box sx={{ display: 'flex', overflowX: 'auto', p: 2 }}>
    <KanbanColumn title="To Do" tasks={tasks.filter((task) => task.status === 'To Do')} />
    <KanbanColumn
      title="In Progress"
      tasks={tasks.filter((task) => task.status === 'In Progress')}
    />
    <KanbanColumn title="Done" tasks={tasks.filter((task) => task.status === 'Done')} />
  </Box>
);

const Dashboard = () => {
  const [view, setView] = useState(0);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      {/* <TopBar /> */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Today
        </Typography>
        <Tabs value={view} onChange={(e, newValue) => setView(newValue)} sx={{ mb: 2 }}>
          <Tab label="List View" />
          <Tab label="Kanban View" />
        </Tabs>
        {view === 0 ? <TaskList /> : <KanbanView />}
      </Box>
    </Box>
  );
};

export default Dashboard;
