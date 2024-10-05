'use client';

import React, { useState } from 'react';

import { ExpandMore } from '@mui/icons-material';
import {
  Box,
  Tab,
  Tabs,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import { TodayTable } from './today-table';
import { KanbanView } from '../kanban/view';

// ----------------------------------------------------------------------

const TaskList = () => (
  <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMore />}>
      <Typography variant="h6">Today's Tasks (15 due)</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <TodayTable />
    </AccordionDetails>
  </Accordion>
);

const Dashboard = () => {
  const [view, setView] = useState(0);

  return (
    <Box>
      {/* <TopBar /> */}
      <Box sx={{ p: 3 }}>
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
