// src/components/AddTaskModal.tsx

import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { PriorityHigh, AccessAlarm, MoreVert } from '@mui/icons-material';

// Add Task Modal Component
const AddTaskModal = ({ open, handleClose }) => {
  const [taskData, setTaskData] = useState({ name: '', description: '', category: 'Inbox' });
  const [dueDate, setDueDate] = useState(null);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTaskData({ ...taskData, [name]: value });
  };

  // Handle task submission (e.g., save the task)
  const handleSubmit = () => {
    console.log('Task Submitted: ', taskData, 'Due Date: ', dueDate);
    // Close the modal after submitting the task
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Task name</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Task name"
          fullWidth
          variant="outlined"
          value={taskData.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          fullWidth
          variant="outlined"
          multiline
          rows={2}
          value={taskData.description}
          onChange={handleChange}
        />

        {/* Controls for Due Date, Priority, Reminders */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <IconButton color="primary">
            <DatePicker
              label="Due date"
              value={dueDate}
              onChange={(newDate) => setDueDate(newDate)}
              renderInput={(params) => <TextField {...params} size="small" />}
            />
          </IconButton>
          <IconButton color="primary">
            <PriorityHigh />
          </IconButton>
          <IconButton color="primary">
            <AccessAlarm />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        {/* Category Dropdown */}
        <FormControl fullWidth margin="dense">
          <InputLabel>Category</InputLabel>
          <Select
            value={taskData.category}
            name="category"
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value="Inbox">Inbox</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
            <MenuItem value="Home">Home</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} variant="text">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Add task
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskModal;
