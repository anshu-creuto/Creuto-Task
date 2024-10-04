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
import { PriorityHigh, AccessAlarm, MoreVert } from '@mui/icons-material'; // Icons for priority, reminders, etc.
import { CONFIG } from 'src/config-global';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />
);

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
};

// ----------------------------------------------------------------------

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
      <Button
        variant="contained"
        onClick={handleAddTask}
      >
        + Task
      </Button>

      {/* Add Task Modal */}
      <AddTaskModal open={open} handleClose={handleClose} />
    </>
  );
};

// Navigation Data
export const navData = [
  {
    items: [
      { custom: true, path: '', render: <AddTaskButton /> },
      { title: 'Search', path: '', icon: ICONS.order },
      { title: 'Inbox', path: '/dashboard/inbox', icon: ICONS.chat },
      { title: 'Today', path: '/dashboard/today', icon: ICONS.external },
      { title: 'Upcoming', path: '/dashboard/upcoming', icon: ICONS.banking },
      { title: 'Filters & Labels', path: '/dashboard/filters-labels', icon: ICONS.label },
    ],
  },
  {
    subheader: 'My Projects',
    items: [
      { title: '#Education', path: '/project/education', icon: ICONS.course },
      { title: '#Home', path: '/project/home', icon: ICONS.job },
    ],
  },
];
