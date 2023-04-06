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
import { VehicleListItem } from '../../component/VehicleList/VehicleListItem';
import { VehicleList } from '../../component/VehicleList/VehicleList';

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
          <VehicleList vehicleList={vehicleList} deleteVehicle={deleteVehicle}>
            <VehicleListItem deleteVehicle={deleteVehicle} vehicleList={vehicleList} />
          </VehicleList>
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

