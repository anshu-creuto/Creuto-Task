'use client';

import React from 'react';

import {
  Box,
  List,
  ListItem,
  Checkbox,
  Container,
  Typography,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import AddTaskButton from '../components/task/AddTaskButton';

const InboxComponent = () => (
  <Container maxWidth="md" sx={{ py: 4, minHeight: '100vh' }}>
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
        Inbox
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <Checkbox checked />
          </ListItemIcon>
          <ListItemText
            primary="Get started by completing this task"
            secondary="Welcome to Todoist - let's tackle those tasks together!"
          />
          <Typography variant="caption" color="text.secondary">
            30 Sep
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography>
                Download Todoist on <strong>all your devices</strong> and <strong>email</strong> for
                📱💻📟 and 💌
              </Typography>
            }
          />
          <Typography variant="caption" color="text.secondary">
            1 Oct
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <ListItemText
            primary="Take the productivity method quiz"
            secondary="Get a personalized recommendation from Todoist"
          />
          <Typography variant="caption" color="text.secondary">
            2 Oct
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <ListItemText
            primary="Browse the Todoist Inspiration Hub"
            secondary="For productivity advice and to sign up for our newsletter"
          />
          <Typography variant="caption" color="text.secondary">
            Yesterday
          </Typography>
        </ListItem>
      </List>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: 2,
          color: 'text.secondary',
          justifyContent: 'center',
        }}
      >
        <AddTaskButton />
      </Box>
    </Box>
  </Container>
);

export default InboxComponent;
