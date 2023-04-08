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
  const [currentEditVehicleId, setCurrentEditVehicleId] = useState(null);
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

  const handleEditVehicleClick = id => {
    setCurrentEditVehicleId(id);
  };

  const handleAddVehicleModalClose = () => {
    setIsAddVehicleModalOpen(false);
  };

  const handleEditVehicleModalClose = () => {
    setCurrentEditVehicleId(null);
  };

  const saveNewVehicle = name => {
    setVehicleList([...vehicleList, {
      id: nanoid(),
      name,
    }]);

    setIsAddVehicleModalOpen(false);
  };

  const editVehicle = newName => {
    const newVehicleList = vehicleList.filter(vehicle => vehicle.id !== currentEditVehicleId);

    setVehicleList([...newVehicleList, {
      id: currentEditVehicleId,
      name: newName,
    }]);

    setCurrentEditVehicleId(null);
  };

  const deleteVehicle = vehicleId => {
    const newVehicleList = vehicleList.filter(vehicle => vehicleId !== vehicle.id);

    setVehicleList(newVehicleList);
  };

  const getVehicleById = id => {
    return vehicleList.find(vehicle => id === vehicle.id);
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
        open={!!currentEditVehicleId}
        handleClose={handleEditVehicleModalClose}
        handleSubmit={editVehicle}
        currentVehicle={getVehicleById(currentEditVehicleId)}
      />
    </>
  );
};

