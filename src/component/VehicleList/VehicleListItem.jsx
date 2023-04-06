import { IconButton, ListItem, ListItemButton, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const VehicleListItem = ({ name, hadleDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          onClick={hadleDelete}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton dense>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};
