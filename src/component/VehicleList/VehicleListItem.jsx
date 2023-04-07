import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { VehicleListItemActions } from './VehicleListItemActions';

export const VehicleListItem = ({ name, handleDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <VehicleListItemActions handleDelete={handleDelete} />
      }
      disablePadding
    >
      <ListItemButton dense>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};
