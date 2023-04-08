import { Button, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Modal } from '../base/Modal/Modal';
import { useEffect, useState } from 'react';

export const EditVehicleModal = ({ open, handleClose, handleSubmit, currentVehicle }) => {
  const [vehicleName, setVehicleName] = useState('');

  useEffect(() => {
    setVehicleName(currentVehicle?.name);
  }, [currentVehicle]);

  const onSubmit = event => {
    event.preventDefault();

    handleSubmit(vehicleName);
    setVehicleName('');
  };

  const handleVehicleNameChange = ({ target }) => {
    setVehicleName(target.value);
  };

  return (
    <Modal open={open} handleClose={handleClose}>
      <DialogTitle>Edit vehicle</DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            label="Vehicle Name"
            fullWidth
            variant="standard"
            value={vehicleName}
            onChange={handleVehicleNameChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </form>
    </Modal>
  );
};
