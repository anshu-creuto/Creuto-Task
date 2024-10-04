import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

const AddTaskModal = ({ open, handleClose }) => {
  const [taskData, setTaskData] = useState({ name: '', description: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Task Submitted: ', taskData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Task Name"
          fullWidth
          variant="outlined"
          value={taskData.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="description"
          label="Task Description"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          value={taskData.description}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Add Task
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskModal;
