import { Button, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Modal } from '../base/Modal/Modal';

export const AddVehicleModal = () => {
  return (
    <Modal open={false}>
      <DialogTitle>Add new vehicle</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Vehicle Name"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button color="error">Cancel</Button>
        <Button>Add</Button>
      </DialogActions>
    </Modal>
  );
};
