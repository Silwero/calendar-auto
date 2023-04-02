import {
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { BottomActions } from '../../component/BottomActions/BottomActions';
import { AddVehicleModal } from '../../component/AddVehicleModal/AddVehicleModal';

export const HomePage = () => {
  const [isAddVehicleModalOpen, setIsAddVehicleModalOpen] = useState(false);
  const handleAddVehicleClick = () => {
    setIsAddVehicleModalOpen(true);
  };
  const handleAddVehicleModalClose = () => {
    setIsAddVehicleModalOpen(false);
  };

  const saveNewVehicle = () => {
    console.log('save');
  };

  return (
    <>
      <Container maxWidth="md">
        <Typography component="h1" variant="h1">My cars</Typography>
        <Paper>
          <List>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton dense>
                <ListItemText primary="Tushkan" />
              </ListItemButton>
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton dense>
                <ListItemText primary="Car" />
              </ListItemButton>
            </ListItem>
          </List>
        </Paper>
      </Container>
      <BottomActions>
        <Button onClick={handleAddVehicleClick}>
          + Add vehicle
        </Button>
      </BottomActions>
      <AddVehicleModal
        open={isAddVehicleModalOpen}
        handleClose={handleAddVehicleModalClose}
        handleSubmit={saveNewVehicle}
      />
    </>
  );
};
