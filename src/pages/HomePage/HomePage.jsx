import {
  Button,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { BottomActions } from '../../component/BottomActions/BottomActions';
import { AddVehicleModal } from '../../component/AddVehicleModal/AddVehicleModal';
import { nanoid } from 'nanoid';
import { VehicleList } from '../../component/VehicleList/VehicleList';
import { EditVehicleModal } from '../../component/EditVehicleModal/EditVehicleModal';

export const HomePage = () => {
  const [isAddVehicleModalOpen, setIsAddVehicleModalOpen] = useState(false);
  const [isEditVehicleModalOpen, setIsEditVehicleModalOpen] = useState(false);
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

  const handleEditVehicleClick = () => {
    setIsEditVehicleModalOpen(true);
  };

  const handleAddVehicleModalClose = () => {
    setIsAddVehicleModalOpen(false);
  };

  const handleEditVehicleModalClose = () => {
    setIsEditVehicleModalOpen(false);
  };

  const saveNewVehicle = name => {
    setVehicleList([...vehicleList, {
      id: nanoid(),
      name,
    }]);

    setIsAddVehicleModalOpen(false);
  };

  const editVehicle = () => {
    console.log('edit');

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
          <VehicleList
            vehicleList={vehicleList}
            deleteVehicle={deleteVehicle}
            handleEditVehicleClick={handleEditVehicleClick}
          />
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
      <EditVehicleModal
        open={isEditVehicleModalOpen}
        handleClose={handleEditVehicleModalClose}
        handleSubmit={editVehicle}
      />
    </>
  );
};

