import { Button, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Modal } from '../base/Modal/Modal';
import { useState } from 'react';

export const AddVehicleModal = ({ open, handleClose, handleSubmit }) => {
  const [vehicleName, setVehicleName] = useState('');

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
      <DialogTitle>Add new vehicle</DialogTitle>
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
          <Button type="submit">Add</Button>
        </DialogActions>
      </form>
    </Modal>
  );
};
