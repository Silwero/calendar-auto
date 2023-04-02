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
import { nanoid } from 'nanoid';

export const HomePage = () => {
  const [isAddVehicleModalOpen, setIsAddVehicleModalOpen] = useState(false);
  const [vehicleList, setVehicleList] = useState([
    {
      id: 1,
      name: 'Tucson',
    },
    {
      id: 2,
      name: 'Car',
    },
  ]);

  const handleAddVehicleClick = () => {
    setIsAddVehicleModalOpen(true);
  };

  const handleAddVehicleModalClose = () => {
    setIsAddVehicleModalOpen(false);
  };

  const saveNewVehicle = name => {
    setVehicleList([...vehicleList, {
      id: nanoid(),
      name,
    }]);

    setIsAddVehicleModalOpen(false);
  };

  const deleteVehicle = vehicleId => {
    const newVehicleList = vehicleList.filter(vehicle => vehicleId !== vehicle.id);

    setVehicleList(newVehicleList);
  };

  return (
    <>
      <Container maxWidth="md">
        <Typography component="h1" variant="h1">My cars</Typography>
        <Paper>
          <List>
            {vehicleList.map(vehicle => {
              return (
                <ListItem
                  key={vehicle.id}
                  secondaryAction={
                    <IconButton onClick={() => deleteVehicle(vehicle.id)} edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton dense>
                    <ListItemText primary={vehicle.name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
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
