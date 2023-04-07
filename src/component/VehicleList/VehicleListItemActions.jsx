import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const VehicleListItemActions = ({ handleDelete, handleEditVehicleClick }) => {
  const [anchorEl, setAnchoEl] = useState(null);

  const handleClick = event => {
    setAnchoEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchoEl(null);
  };

  const handleEdit = () => {
    handleEditVehicleClick();
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClick} edge="end" aria-label="delete">
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEdit} disableRipple>
          <EditIcon sx={{ mr: 2 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete} disableRipple>
          <DeleteIcon sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};
