import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Typography,
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  'Account',
  'General',
  'Advanced',
  'Subscription',
  'Theme',
  'Sidebar',
  'Quick Add',
  'Productivity',
  'Reminders',
  'Notifications',
  'Backups',
  'Integrations',
  'Calendars',
];

const SettingsModal: React.FC<SettingsModalProps> = ({ open, onClose }) => {
  const [selectedMenu, setSelectedMenu] = useState('Account');

  // Account settings state
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [twoFactor, setTwoFactor] = useState(false);

  // General settings state
  const [language, setLanguage] = useState('English');
  const [timeZone, setTimeZone] = useState('UTC');
  const [timeFormat, setTimeFormat] = useState('24h');
  const [dateFormat, setDateFormat] = useState('DD/MM/YYYY');
  const [weekStart, setWeekStart] = useState('Monday');
  const [nextWeek, setNextWeek] = useState('Next 7 days');
  const [weekend, setWeekend] = useState('Sat & Sun');

  const renderContent = () => {
    switch (selectedMenu) {
      case 'Account':
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6">Plan: Beginner</Typography>
            <Button variant="outlined">Manage plan</Button>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ width: 64, height: 64 }}>JD</Avatar>
              <Box>
                <Button variant="outlined" size="small">
                  Change photo
                </Button>
                <Button variant="text" size="small" color="error">
                  Remove photo
                </Button>
              </Box>
            </Box>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <Button variant="outlined">Change email</Button>
            <Button variant="outlined">Add password</Button>
            <FormControlLabel
              control={
                <Switch checked={twoFactor} onChange={(e) => setTwoFactor(e.target.checked)} />
              }
              label="Two-factor authentication"
            />
            <Typography variant="body2">
              {twoFactor ? '2FA is enabled on your account.' : '2FA is disabled on your account.'}
            </Typography>
            <Typography variant="h6">Connected accounts</Typography>
            <Typography variant="body2">
              Log in to Todoist with your Google, Facebook, or Apple account.
            </Typography>
            <Button
              variant="outlined"
              // startIcon={<img src="/api/placeholder/20/20" alt="Google" width={20} />}
            >
              Connect with Google
            </Button>
            <Button
              variant="outlined"
              // startIcon={<img src="/api/placeholder/20/20" alt="Facebook" width={20} />}
            >
              Connect with Facebook
            </Button>
            <Button
              variant="outlined"
              // startIcon={<img src="/api/placeholder/20/20" alt="Apple" width={20} />}
            >
              Connect with Apple
            </Button>
          </Box>
        );

      case 'General':
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select
                value={language}
                label="Language"
                onChange={(e) => setLanguage(e.target.value)}
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Spanish">Spanish</MenuItem>
                <MenuItem value="French">French</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Time Zone</InputLabel>
              <Select
                value={timeZone}
                label="Time Zone"
                onChange={(e) => setTimeZone(e.target.value)}
              >
                <MenuItem value="UTC">UTC</MenuItem>
                <MenuItem value="EST">EST</MenuItem>
                <MenuItem value="PST">PST</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Time Format</InputLabel>
              <Select
                value={timeFormat}
                label="Time Format"
                onChange={(e) => setTimeFormat(e.target.value)}
              >
                <MenuItem value="24h">24-hour</MenuItem>
                <MenuItem value="12h">12-hour</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Date Format</InputLabel>
              <Select
                value={dateFormat}
                label="Date Format"
                onChange={(e) => setDateFormat(e.target.value)}
              >
                <MenuItem value="DD/MM/YYYY">DD/MM/YYYY</MenuItem>
                <MenuItem value="MM/DD/YYYY">MM/DD/YYYY</MenuItem>
                <MenuItem value="YYYY-MM-DD">YYYY-MM-DD</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Week Starts On</InputLabel>
              <Select
                value={weekStart}
                label="Week Starts On"
                onChange={(e) => setWeekStart(e.target.value)}
              >
                <MenuItem value="Monday">Monday</MenuItem>
                <MenuItem value="Sunday">Sunday</MenuItem>
                <MenuItem value="Saturday">Saturday</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Next Week</InputLabel>
              <Select
                value={nextWeek}
                label="Next Week"
                onChange={(e) => setNextWeek(e.target.value)}
              >
                <MenuItem value="Next 7 days">Next 7 days</MenuItem>
                <MenuItem value="Next Monday to Sunday">Next Monday to Sunday</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Weekend</InputLabel>
              <Select value={weekend} label="Weekend" onChange={(e) => setWeekend(e.target.value)}>
                <MenuItem value="Sat & Sun">Saturday & Sunday</MenuItem>
                <MenuItem value="Fri & Sat">Friday & Saturday</MenuItem>
                <MenuItem value="Sun">Sunday</MenuItem>
              </Select>
            </FormControl>
          </Box>
        );

      // Placeholder for other menu items
      default:
        return <Typography>Content for {selectedMenu} goes here.</Typography>;
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <List>
              {menuItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton
                    selected={selectedMenu === item}
                    onClick={() => setSelectedMenu(item)}
                  >
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={9}>
            {renderContent()}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettingsModal;
