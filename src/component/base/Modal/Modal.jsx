import { Dialog } from '@mui/material';

export const Modal = ({ children, open, handleClose }) => {
  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
      {children}
    </Dialog>
  );
};
