import React from 'react';

import LabelIcon from '@mui/icons-material/Label';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import {
  Box,
  List,
  ListItem,
  Accordion,
  Container,
  Typography,
  ListItemIcon,
  ListItemText,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

const FiltersAndLabels = () => (
  <Box sx={{ py: 4, }}>
    <Container >
      <Typography variant="h5" gutterBottom>
        Filters & Labels
      </Typography>

      {/* Filters Section */}
      <Box component="section" sx={{ mb: 3 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Filters</Typography>
            <Typography variant="body2" sx={{ ml: 2, color: 'text.secondary' }}>
              USED: 2/3
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AssignmentTurnedInIcon />
                </ListItemIcon>
                <ListItemText primary="Assigned to me" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PriorityHighIcon />
                </ListItemIcon>
                <ListItemText primary="Priority 1" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Labels Section */}
      <Box component="section" sx={{ mb: 3 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">Labels</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LabelIcon />
                </ListItemIcon>
                <ListItemText primary="Read" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  </Box>
);

export default FiltersAndLabels;
