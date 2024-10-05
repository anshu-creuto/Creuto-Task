// src/components/AddTaskButton.tsx

import { useState } from 'react';

import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';

import AddTaskModal from './task-modal';

// Add Task Button Component
const AddTaskButton = () => {
  const [open, setOpen] = useState(false);

  // Function to open the modal
  const handleAddTask = () => {
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleAddTask}>
        <Add /> Add Task
      </Button>

      {/* Add Task Modal */}
      <AddTaskModal open={open} handleClose={handleClose} />
    </>
  );
};

export default AddTaskButton;
