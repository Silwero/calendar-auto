import { Dialog } from '@mui/material';

export const Modal = ({ children, open }) => {
  return (
    <Dialog fullWidth maxWidth="sm" open={open}>
      {children}
    </Dialog>
  );
};
