import { Button, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Modal } from '../base/Modal/Modal';

export const AddVehicleModal = ({ open, handleClose, handleSubmit }) => {
  const onSubmit = event => {
    event.preventDefault();

    handleSubmit();
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
